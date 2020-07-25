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
    const listItem = document.createElement('li');
    const deleteItem = document.createElement('button');

    listItem.textContent = `Task: ${task} Type: ${type} Priority: ${priority}`;
    deleteItem.innerHTML = "Delete";
    list.appendChild(listItem);
    listItem.appendChild(deleteItem);
    deleteItem.setAttribute('id', 'delete-item');


    this.reset();
};

const handleDeleteAllClick = function() {
    const list = document.querySelector('#to-do-list');
    list.innerHTML = '';
}