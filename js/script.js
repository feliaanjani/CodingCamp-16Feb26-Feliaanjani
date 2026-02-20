// Temporary data storage for to do items
let todos = [];

// function to add a new to do item
function addToDo() {
    const todoInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');

    // Basic validation to ensure both fields are filled
    if (todoInput.value.trim() === '' || dateInput.value === '') {
        alert('Please enter to do item and select a date.');
        return;
    } else{
        // create a new to do object and add it to the todos array
        const newToDo = {
            text: todoInput.value,
            date: dateInput.value
            };

        //  add the new to do to list   
    }    todos.push(newToDo);
}       

function displayToDos() {}

function deleteToDo() {}

function filterToDos() {}