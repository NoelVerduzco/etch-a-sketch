// GET USER GRID SIZE

function askGridLength() {
    let gridLength = prompt("Enter the dimensions of your grid");
    return gridLength;
}

const gridBtn = document.querySelector('#gridBtn');

gridBtn.addEventListener('click', function() {
    let gridSide = askGridLength();
    createGrid(gridSide);
});

// CREATE GRID

const pixels = document.querySelector('.pixels');

const fragment = document.createDocumentFragment();

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
    pixels.appendChild(fragment);
}

// COLOR BOXES

const cols = document.querySelectorAll('.col');

cols.forEach( (box) => {
    box.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'green';
    });
});