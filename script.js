// Senha do administrador
const adminPassword = "12345";

// Exibe a seção de login ao clicar em "Logar como Administrador"
function showLogin() {
    document.getElementById("loginSection").style.display = "block";
}

// Verifica a senha do administrador
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === adminPassword) {
        document.getElementById("adminSection").style.display = "block";
        document.getElementById("loginSection").style.display = "none";
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
        checkNoTasks();
    }, taskDate.getTime() - new Date().getTime());

    taskList.style.display = "block";
    document.getElementById("noTasksMessage").style.display = "none";
}

// Remove uma tarefa manualmente
function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
    checkNoTasks();
}

// Verifica se não há tarefas e exibe a mensagem apropriada
function checkNoTasks() {
    const taskList = document.getElementById("taskList");
    if (taskList.children.length === 0) {
        document.getElementById("noTasksMessage").style.display = "block";
        taskList.style.display = "none";
    }
}
