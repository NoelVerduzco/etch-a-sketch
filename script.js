const gridBtn = document.querySelector('#gridBtn');

const pixels = document.querySelector('.pixels');

const fragment = document.createDocumentFragment();

// GET USER GRID SIZE

function askGridLength() {
    let gridLength = prompt("Enter the dimensions of your grid", 16);
    return gridLength;
}

gridBtn.addEventListener('click', function() {
    let gridLength = askGridLength();
    createGrid(gridLength);
    colorGrid();
});

// CREATE GRID

function createGrid(num) {
    let gridLength = num;

    for (let row = 0; row < gridLength; row++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        for (let col = 0; col < gridLength; col++) {
            const divCol = document.createElement('div');
            divCol.classList.add('col');
            divRow.appendChild(divCol);
        }
        fragment.appendChild(divRow);
    }
    pixels.innerHTML = '';
    pixels.appendChild(fragment);
}

// COLOR BOXES

function colorGrid() {
    const cols = document.querySelectorAll('.col');

    cols.forEach( (box) => {
        box.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
    });
}