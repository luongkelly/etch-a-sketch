const color = document.getElementById('color');
const colorBtn = document.getElementById('colorBtn');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const size = document.getElementById('size');
const slider = document.getElementById('slider');
const grid = document.getElementById('grid');

let currentColor = '#333333';
let currentSize = 16;
let eraserColor = '#FFFFFF';
let eraserMode = false;
let rainbowMode = false;

function setColor(newColor) {
    currentColor = newColor;
    eraserMode = false;
    eraser.classList.remove('active');
    colorBtn.classList.add('active');
}

function setSize(newSize) {
    currentSize = newSize;
}

eraser.addEventListener('click', () => {
    eraserMode = true;
    rainbowMode = false;
    eraser.classList.add('active');
    colorBtn.classList.remove('active');
    rainbow.classList.remove('active');
})

colorBtn.addEventListener('click', () => {
    eraserMode = false;
    rainbowMode = false;
    colorBtn.classList.add('active');
    eraser.classList.remove('active');
    rainbow.classList.remove('active');
})

rainbow.addEventListener('click', () => {
    rainbowMode = true;
    eraserMode = false;
    rainbow.classList.add('active');
    colorBtn.classList.remove('active');
    eraser.classList.remove('active');
})

clear.addEventListener('click', () => {
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.style.backgroundColor = eraserColor;
    });
})

slider.addEventListener('input', (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    createGrid(newSize);
});

function createGrid(size) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < currentSize * currentSize; i++) {
        colorBtn.classList.add('active');
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.addEventListener('mouseover', () => {
            if (!eraserMode && !rainbowMode) {
                gridCell.style.backgroundColor = currentColor;
            }
            else if (rainbowMode && !eraserMode) {
                const r = Math.floor(Math.random() * 256)
                const g = Math.floor(Math.random() * 256)
                const b = Math.floor(Math.random() * 256)
                gridCell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            else {
                gridCell.style.backgroundColor = eraserColor;
            }
        })
        grid.appendChild(gridCell);
    }
}

createGrid(currentSize);

color.oninput = (e) => setColor(e.target.value);