const container = document.getElementById('container');
let gridSize = 16;


function createGrid() {
    let gridSpaces = (gridSize * gridSize);
    for ( i = 0; i < gridSpaces; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'gridDiv');
        div.addEventListener('mouseover', blockSelected);
        container.appendChild(div);
    }
}

const clear = document.getElementById("clear-button");
clear.addEventListener('click', clearGrid);

const resize = document.getElementById("resize-button");
resize.addEventListener('click', resizeGrid);

// To clear and repopulate the grid
function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    createGrid();
}

function resizeGrid(){
    gridSize = prompt('How many squares per side?');
    clearGrid();
}

function blockSelected() {
    this.classList.add('block-selected');
}

// To create grid on page load
createGrid();
