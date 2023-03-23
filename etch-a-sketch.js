//create grid
function drawGrid() {
    const gridContainer = document.querySelector(".gridContainer");
    let squares = 64;
    let size = 960 / squares;

for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
        const gridBlock = document.createElement('div');
        gridBlock.style.height = `${size}px`;
        gridBlock.style.width = `${size}px`;
        gridBlock.classList.add('gridBlock');
        gridContainer.appendChild(gridBlock);
    }
    
    }
}

//change cell color
function colorCells() {
    let cells = document.querySelectorAll(".gridBlock");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "blue";
            });
        });
}

drawGrid();
colorCells();




