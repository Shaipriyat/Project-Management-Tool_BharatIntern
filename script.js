const assignTaskButton = document.getElementById('assign-task');
const sendButton = document.getElementById('send-message');
const chatMessageInput = document.getElementById('chat-message');
const chat = document.getElementById('chat');

assignTaskButton.addEventListener('click', function () {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const assignee = document.getElementById('assignee').value;

    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDescription}</p>
        <p>Assignee: ${assignee}</p>
    `;

    chat.appendChild(taskElement);

    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
});

sendButton.addEventListener('click', function () {
    const message = chatMessageInput.value;
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chat.appendChild(messageElement);

    chatMessageInput.value = '';
});
