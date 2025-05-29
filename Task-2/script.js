document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("All fields are required.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
    this.reset();
  });
  });
  document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoItems = document.getElementById("todo-items");

  // Load saved tasks from localStorage
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToDOM(task));

  // Add new task
  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    addTaskToDOM(taskText);
    saveTask(taskText);
    todoInput.value = "";
  });

  // Add task item to DOM
  function addTaskToDOM(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", function () {
      todoItems.removeChild(li);
      removeTask(taskText);
    });

    li.appendChild(removeBtn);
    todoItems.appendChild(li);
  }

  // Save task to localStorage
  function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Remove task from localStorage
  function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
