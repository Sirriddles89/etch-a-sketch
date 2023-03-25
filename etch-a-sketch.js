//create grid
function drawGrid(e) {
    gridContainer.innerHTML = "";
    let input = document.querySelector('#squares').value;
    squares = parseInt(input);
    e.preventDefault();
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
    colorCells();     
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


const gridContainer = document.querySelector(".gridContainer");
window.addEventListener('submit', drawGrid)




