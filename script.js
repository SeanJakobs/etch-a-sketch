const container = document.getElementById('container');
const row = document.getElementsByClassName('gridRow');
let gridSize = 16;

function createRow() {
    for ( i = 0; i < gridSize; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'gridRow');
        container.appendChild(div);
    }
}

function populateRow(){
    for ( i = 0; i < gridSize; i++){
        [...row].forEach((parent, i) => {
            let div = document.createElement('div');
            div.setAttribute('class', 'gridDiv');
            div.addEventListener('mouseover', blockSelected);
            parent.appendChild(div);
        });
    }
}

function createGrid(){
    createRow();
    populateRow();
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
    let previousGridSize = gridSize;
    gridSize = prompt('How many blocks per side?');
    if (gridSize === null){
        return;
    }
    else if (gridSize > 128){
        alert("That's too high! try using a number 128 or less");
        gridSize = previousGridSize;
    }
    clearGrid();
}

function blockSelected() {
    this.classList.add('block-selected');
}

// To create grid on page load
createGrid();
