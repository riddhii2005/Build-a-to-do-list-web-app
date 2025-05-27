const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔️';
  completeBtn.title = 'Mark as complete';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.title = 'Delete task';
  deleteBtn.onclick = () => taskList.removeChild(li);

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(actionsDiv);

  taskList.appendChild(li);
  taskInput.value = '';
}
