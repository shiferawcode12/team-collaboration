const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(li);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function addTask(e) {
  e.preventDefault();
  const input = document.querySelector('input[type="text"]');
  if (!input.value) return;
  tasks.push(input.value);
  input.value = '';
  renderTasks();
}
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
form.addEventListener('submit', addTask);
renderTasks();