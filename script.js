// choose N number of rows and columns
// create N container divs with N boxes in each

const pixels = document.querySelector('.pixels');

const fragment = document.createDocumentFragment();

for (let row = 0; row < 3; row++) {
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    for (let col = 0; col < 3; col++) {
        const divCol = document.createElement('div');
        divCol.classList.add('col');
        divRow.appendChild(divCol);
    }
    fragment.appendChild(divRow);
}

pixels.appendChild(fragment);