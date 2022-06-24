const main = document.querySelector('.main');
const styleSheet = document.styleSheets[0];
const input = document.querySelector('input[type="submit"]');
const sizeInput = document.querySelector('input#size');
const lengthInput = document.querySelector('input#length');

let length = 12;
let size = 20;

function createDivs() {

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

}

input.addEventListener('click',createDivs);

createDivs();