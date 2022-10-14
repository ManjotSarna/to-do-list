const taskInput = document.querySelector('.task_input');
const taskButton = document.querySelector('.task_button');
const taskList = document.querySelector('.task_list');

taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);








function addTask(event) {
    event.preventDefault();
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('task_item');
    taskDiv.appendChild(newTask);
    if(taskInput.value === ""){
        return null;
    }
    
    const completedButton = document.createElement('button');
    completedButton.addEventListener("click", ding);
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    taskDiv.appendChild(completedButton);
   
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener("click", discard);
    deleteButton.innerHTML = '<i class="fa-solid fa-ban"></i>';
    deleteButton.classList.add('delete_btn');
    taskDiv.appendChild(deleteButton);
   
    taskList.appendChild(taskDiv);
    
    taskInput.value = ""
}

function deleteTask(e) {
    const item = e.target;
    
    if (item.classList[0] === "delete_btn") {
        const task = item.parentElement;
       
        task.classList.add("fall")
        task.addEventListener('transitionend', function () {
            task.remove();
        })
    }
   
    if (item.classList[0] === "complete_btn") {
        const task = item.parentElement;
        task.classList.toggle("completedItem");
    }
}

function ding() {
    var audio = document.getElementById("check");
    audio.play();
  }

function discard() {
    var audio = document.getElementById("discard");
    audio.play();;
}

