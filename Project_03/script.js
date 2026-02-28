let arr = [];

function addData(title) {
    let task = {
        id: Date.now(),
        title: title,
        completed: false
    };

    arr.push(task);
    render();
}

function deleteTask(id) {
    arr = arr.filter(task => task.id !== id);
    render();
}

function toggleTask(id) {
    arr = arr.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    render();
}
function deleteTask(id) {
    arr = arr.filter(task => task.id !== id);
    render();


}

function render() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    arr.forEach(task => {
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between mb-2 align-items-center";

        li.innerHTML = `
            <span 
                class="${task.completed ? 'text-decoration-line-through text-muted' : ''}">
                ${task.title}
            </span>

            <div>
                <button 
                    class="btn btn-sm btn-success me-2" 
                    onclick="toggleTask(${task.id})">
                    Done
                </button>

                <button 
                    class="btn btn-sm btn-danger" 
                    onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        list.appendChild(li);
    });
}


document.getElementById("addBtn").addEventListener("click", function () {
    let input = document.getElementById("taskInput");

    if (input.value.trim() !== "") {
        addData(input.value);
        input.value = "";
    }
});