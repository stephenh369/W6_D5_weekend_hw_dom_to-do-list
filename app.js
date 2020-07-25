document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded");

    const form = document.querySelector('#new-task-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleDeleteAllClick);

});

const handleFormSubmit = function(e) {
    e.preventDefault();
    console.log(this);
    
    const task = this.task.value;
    const type = this.type.value;
    const priority = this.priority.value;
    const list = document.querySelector('#to-do-list');
    let listItem = document.createElement('li');
    let deleteItem = document.createElement('button');

    listItem.textContent = `Task: ${task} Type: ${type} Priority: ${priority}`;
    deleteItem.innerHTML = "Delete";
    list.appendChild(listItem);
    listItem.classList.add('list-item');
    listItem.appendChild(deleteItem);
    deleteItem.classList.add('delete-item');

    this.reset();

    list.addEventListener('click', handleDeleteItemClick);
};

const handleDeleteAllClick = function() {
    const list = document.querySelector('#to-do-list');
    list.innerHTML = '';
};

const handleDeleteItemClick = function(e) {
    const item = e.target;
    item.parentNode.remove();
};