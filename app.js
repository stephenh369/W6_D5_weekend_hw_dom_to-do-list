document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded");

    const form = document.querySelector('#new-task-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleDeleteAllClick);
});