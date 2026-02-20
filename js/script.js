// Temporary data storage
let todos = [];

// DOM Elements
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const todoBody = document.getElementById("todo-body");
const emptyState = document.querySelector(".empty-state");

// Prevent default jika button di dalam form
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addToDo();
});

// Optional: tekan Enter untuk tambah task
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addToDo();
    }
});

// Function to add new todo
function addToDo() {

    const todoText = todoInput.value.trim();
    const todoDate = dateInput.value;

    // VALIDASI KUAT
    if (!todoText || !todoDate) {
        alert("Please enter a task and select a date.");
        return; // STOP di sini
    }

    const newToDo = {
        id: Date.now(),
        text: todoText,
        date: todoDate,
        completed: false
    };

    todos.push(newToDo);

    // Reset input setelah sukses
    todoInput.value = "";
    dateInput.value = "";

    displayToDos();
}

// Display todos
function displayToDos() {

    todoBody.innerHTML = "";

    if (todos.length === 0) {
        emptyState.style.display = "block";
        return;
    } else {
        emptyState.style.display = "none";
    }

    const today = new Date().toISOString().split("T")[0];

    todos.forEach(function (todo) {

        let statusClass = "pending";
        let statusText = "Pending";

        if (todo.completed) {
            statusClass = "completed";
            statusText = "Completed";
        } else if (todo.date < today) {
            statusClass = "overdue";
            statusText = "Overdue";
        }

        const row = `
            <tr>
                <td>${todo.text}</td>
                <td>${todo.date}</td>
                <td><span class="status ${statusClass}">${statusText}</span></td>
                <td>
                    <button class="action-btn complete-btn" onclick="toggleComplete(${todo.id})">✓</button>
                    <button class="action-btn delete-btn" onclick="deleteToDo(${todo.id})">🗑</button>
                </td>
            </tr>
        `;

        todoBody.innerHTML += row;
    });
}

// Delete function
function deleteToDo(id) {
    todos = todos.filter(todo => todo.id !== id);
    displayToDos();
}

//Delete all Button
const deleteAllBtn = document.getElementById("delete-all-btn");

deleteAllBtn.addEventListener("click", function () {
    todos = [];
    displayToDos();
});


// Toggle complete
function toggleComplete(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });

    displayToDos();
}
