// GET USER GRID SIZE


const gridBtn = document.querySelector('#gridBtn');

gridBtn.addEventListener('click', function() {

});

// CREATE GRID

const pixels = document.querySelector('.pixels');

const fragment = document.createDocumentFragment();

let gridLength = 16;

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

// COLOR BOXES

pixels.appendChild(fragment);

const cols = document.querySelectorAll('.col');

cols.forEach( (box) => {
    box.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'green';
    });
});