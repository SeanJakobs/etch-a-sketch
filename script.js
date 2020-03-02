const container = document.getElementById('container');
const prompt = 256;

for ( i = 0; i < prompt; i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'gridDiv');
    div.addEventListener('mouseover', blockSelected);
    container.appendChild(div);
}

function blockSelected() {
    this.classList.add('block-selected');
}
