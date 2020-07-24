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

    listItem.textContent = `Task: ${task} Type: ${type} Priority: ${priority}`;
    list.appendChild(listItem);

    this.reset();
};

const handleDeleteAllClick = function(e) {

}