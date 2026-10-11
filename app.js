const STORAGE_KEY = "simple-task-manager.tasks";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");

let tasks = loadTasks();

function loadTasks() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // Storage unavailable (e.g. private mode) — app keeps working in memory.
  }
}

function render() {
  list.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");
    li.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", "Mark as completed");

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    li.append(checkbox, text, deleteBtn);
    list.appendChild(li);
  }

  emptyState.hidden = tasks.length > 0;
}

function update() {
  saveTasks();
  render();
}

function addTask(text) {
  tasks.push({ id: String(Date.now()), text, completed: false });
  update();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    update();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  update();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTask(text);
  input.value = "";
  input.focus();
});

list.addEventListener("change", (event) => {
  if (event.target.matches('input[type="checkbox"]')) {
    toggleTask(event.target.closest("li").dataset.id);
  }
});

list.addEventListener("click", (event) => {
  if (event.target.matches(".delete-btn")) {
    deleteTask(event.target.closest("li").dataset.id);
  }
});

render();
