// EVENT LISTENER FUNCTIONS FOR CONTENT LOAD, FORM SUBMISSION AND DELETE ALL
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded");

    const form = document.querySelector('#new-task-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleDeleteAllClick);

});

// FORM SUBMIT FUNCTION
const handleFormSubmit = function(e) {
    e.preventDefault();
    console.log(this);

    // VARIABLES
    const task = this.task.value;
    const type = this.type.value;
    const priority = this.priority.value;
    const list = document.querySelector('#to-do-list');
    let listItem = document.createElement('li');
    let deleteItem = document.createElement('button');

    // TEXT DISPLAYED IN LI ITEM
    listItem.innerText = `Task: ${task}\n Type: ${type}\n Priority: ${priority}\n`;
    
    // DELETE BUTTON TEXT
    deleteItem.innerHTML = "Delete";
    
    // APPEND LI ITEM TO LIST
    list.appendChild(listItem);

    // GIVES LI ITEM A CLASS
    listItem.classList.add('list-item');
    
    // APPENDS A DELETE BUTTON FOR LI ITEM
    listItem.appendChild(deleteItem);

    // GIVES DELETE BUTTON A CLASS
    deleteItem.classList.add('delete-item');

    // RESETS FORM INPUT VALUES
    this.reset();

    // EVENT LISTENER FOR DELETE BUTTON CLICK ON ANY LI ITEMS
    list.addEventListener('click', handleDeleteItemClick);
};

// DELETE ALL FUNCTION
const handleDeleteAllClick = function() {
    const list = document.querySelector('#to-do-list');
    list.innerHTML = '';
};

// DELETE LI ITEM FUNCTION
const handleDeleteItemClick = function(e) {
    const item = e.target;
    item.parentNode.remove();
};