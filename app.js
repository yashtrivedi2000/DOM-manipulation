let table = document.getElementById('table');



function deleteRow(element) {
    let button = document.getElementById(element.id);
    let td = button.parentElement.previousElementSibling;
    button.remove();
    td.remove();
}

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
    let input = prompt('Add a name');
    let id = table.rows.length;
    let row = table.insertRow(id);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    col1.innerHTML = input;
    col2.innerHTML = `<button id=${id} onclick="deleteRow(this)">Delete</button>`
})