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
let eraserMode = false;

function setColor(newColor) {
    currentColor = newColor;
}

eraser.addEventListener('click', () => {
    eraserMode = true;
    eraser.classList.add('active');
})

for (let i = 0; i < currentSize * currentSize; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.addEventListener('mouseover', () => {
        if (!eraserMode) {
            gridCell.style.backgroundColor = currentColor;
        }
        else {
            gridCell.style.backgroundColor = rgb(255, 255, 255);
        }
    })
    grid.appendChild(gridCell);
}

color.oninput = (e) => setColor(e.target.value);