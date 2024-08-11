// Senha do administrador
const adminPassword = "12345";

// Verifica a senha do administrador
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === adminPassword) {
        document.getElementById("taskForm").style.display = "block";
    } else {
        alert("Senha incorreta!");
    }
}

// Adiciona uma nova tarefa
function addTask() {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const taskDateInput = document.getElementById("taskDate");

    const taskText = taskInput.value;
    const taskDate = new Date(taskDateInput.value);

    if (taskText === "" || isNaN(taskDate.getTime())) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText} - ${taskDate.toLocaleString()} 
        <button onclick="removeTask(this)">Remover</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    taskDateInput.value = "";

    // Configura a remoção automática da tarefa
    setTimeout(() => {
        taskList.removeChild(li);
    }, taskDate.getTime() - new Date().getTime());
}

// Remove uma tarefa manualmente
function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
