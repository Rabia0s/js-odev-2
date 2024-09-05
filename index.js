document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">Sil</button>
        `;
        
        // Toggle completed class on click
        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        
        // Remove task on button click
        li.querySelector('.remove-btn').addEventListener('click', () => {
            li.remove();
        });

        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    // Optionally, add Enter key functionality
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
