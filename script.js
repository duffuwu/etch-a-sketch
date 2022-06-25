const styleSheet = document.styleSheets[0];
const input = document.querySelector('button');
const sizeInput = document.querySelector('input#size');
const lengthInput = document.querySelector('input#length');


function generateGrid() {

    document.querySelector('.main').remove();

    var elem = document.createElement('div');
    document.body.appendChild(elem);
    elem.classList.add('main');

    const main = document.querySelector('.main');

    let length = parseInt(lengthInput.value);
    let size = parseInt(sizeInput.value);


    if (
        size === 0  ||
        isNaN(size)
    ) {
        return
    }
    if (
        length === 0  ||
        isNaN(length)
    ) {
        return
    }

    for (i = 0; i < length; i++) {
        const div = document.createElement('div');
        main.appendChild(div);
        div.classList.add(`row${i}`);
    }
    const rowDivs = document.querySelectorAll('.main div');

    rowDivs.forEach(row => {
        row.classList.add('row');
        for (i = 0; i < length; i++) {
            const div = document.createElement('div');
            row.appendChild(div);
            div.classList.add(`column${i}`);
        }
        const columnDivs = document.querySelectorAll('.row div');

        columnDivs.forEach(column => column.classList.add('column'));
    });

    const columns = document.querySelectorAll('.column');
    const rows = document.querySelectorAll('.row');

    columns.forEach(column => {
        column.style.width = `${size}px`;
        column.style.height = `${size}px`;
    });

    main.style.width = `${(length * size) + length + 1}px`;
    main.style.height = `${(length * size) + length + 1}px`;

    const divs = document.querySelectorAll('.column');
    return divs.forEach(div => div.addEventListener('mouseenter',colorSquare));

}

function colorSquare() {
    this.style.background = 'black';
}

function clearGrid() {
    const grid = document.querySelectorAll('.column');
    grid.forEach(square => square.style.background = 'white');
}

generateGrid();