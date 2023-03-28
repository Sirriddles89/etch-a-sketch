//create grid
function drawGrid(e) {
    gridContainer.innerHTML = "";
    let input = document.querySelector('#squares').value;
    squares = parseInt(input);
    if (squares > 64 || squares < 1) {
        alert("Please enter a number between 0 and 65");
        return;
    }
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
            cell.style.backgroundColor = randomBackground();
                      
        });
    });
}

//refresh grid (this is an onclick function)
function refresh() {
    gridContainer.innerHTML = "";
}

function randomBackground() {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let bgColor = `rgb(${x}, ${y}, ${z})`

     return bgColor;

    
}

let brightness = 100;
const gridContainer = document.querySelector(".gridContainer");
window.addEventListener('submit', drawGrid)




