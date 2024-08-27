document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskList = document.getElementById('taskList');

        // Create a new list item
        const li = document.createElement('li');

        // Create a checkbox for task completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create a label for the task text
        const label = document.createElement('label');
        label.textContent = taskValue;

        // Add event listener to strike through task on checkbox click
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // Append checkbox and label to the list item
        li.appendChild(checkbox);
        li.appendChild(label);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";

        // Scroll to the bottom of the task list
        taskList.scrollTop = taskList.scrollHeight;
    }
});

document.getElementById('deleteCompletedBtn').addEventListener('click', function() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.querySelectorAll('li.completed');

    tasks.forEach(function(task) {
        taskList.removeChild(task);
    });
});
