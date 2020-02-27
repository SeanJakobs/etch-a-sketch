const container = document.getElementById('container');
const prompt = 256;

for ( i = 0; i < prompt; i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'gridDiv');
    container.appendChild(div);
}

