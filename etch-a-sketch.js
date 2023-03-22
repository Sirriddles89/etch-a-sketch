const gridContainer = document.querySelector(".gridContainer");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('gridBlock');
        gridContainer.appendChild(gridBlock);
    }
    
}

