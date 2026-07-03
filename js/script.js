// =====================================
// CSC106 Portfolio JavaScript
// Andrew Egere
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully");

  // Planner Elements
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const emptyMessage = document.getElementById("emptyMessage");

  // Stop if we're not on planner.html
  if (!taskInput || !addTaskBtn || !taskList) {
    return;
  }

  addTaskBtn.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new list item
    const newTask = document.createElement("li");

    newTask.innerHTML = `
    <span class="task-text">${task}</span>

    <div class="task-buttons">
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    </div>
`;

    // Add task to list
    taskList.appendChild(newTask);

    // Hide the empty message
    emptyMessage.style.display = "none";

    // Delete button
    const deleteBtn = newTask.querySelector(".delete-btn");

    // Complete button
    const completeBtn = newTask.querySelector(".complete-btn");

    completeBtn.addEventListener("click", function () {
      const taskText = newTask.querySelector(".task-text");

      taskText.classList.toggle("completed");

      if (taskText.classList.contains("completed")) {
        completeBtn.textContent = "Completed";
      } else {
        completeBtn.textContent = "Complete";
      }
    });

    deleteBtn.addEventListener("click", function () {
      newTask.remove();

      if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
      }
    });

    // Clear the input box
    taskInput.value = "";
  });

  // =====================================
  // CONTACT FORM
  // =====================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (fullName === "" || email === "" || phone === "" || message === "") {
        alert("Please complete all fields.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const phonePattern = /^[0-9+\-\s()]{7,15}$/;

      if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }

      alert("Thank you! Your message has been submitted successfully.");

      contactForm.reset();
    });
  }
});
