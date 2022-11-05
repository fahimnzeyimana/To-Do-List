


const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');


    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBotton = document.createElement("button");
    checkBotton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBotton.classList.add('checkTask');
    task.appendChild(checkBotton);



    let deleteBotton = document.createElement("button");
    deleteBotton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBotton.classList.add('deleteTask');
    task.appendChild(deleteBotton);

    if(inputTask.value === ""){
        alert('please enter task');
    }else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkBotton.addEventListener('click', function(){
        checkBotton.parentElement.style.textDecoration = 
        "line-through";
    });

    deleteBotton.addEventListener('click', function(e){
        let target = e.target;

        target.parentElement.parentElement.remove();
    });

});