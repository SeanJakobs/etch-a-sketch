const container = document.getElementById('container');
const prompt = 256;

function createGrid() {
    for ( i = 0; i < prompt; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'gridDiv');
        div.addEventListener('mouseover', blockSelected);
        container.appendChild(div);
    }
}

const clear = document.getElementById("clear-button");
clear.addEventListener('click', clearGrid);

// To clear and repopulate the grid
function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    createGrid();
}

function blockSelected() {
    this.classList.add('block-selected');
}

// To create grid on page load
createGrid();
