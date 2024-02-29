'use strict'

const err = document.querySelector(".err");
const inputTask = document.getElementById("input-task");
const addTaskBtn = document.querySelector("#add-task");
const inputSearch = document.getElementById("search-input");
const taskList = document.querySelector(".task-list");
const clearAllBtn = document.querySelector(".clear-all");

// Para deletar tarefas

taskList.addEventListener("click", (e)=>{
    e.preventDefault();
if(e.target.classList.contains('botaodeletar')){

e.target.parentElement.remove();
}
});

// Para adicionar tarefas

addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault();
if(inputTask.value !==''){

const taskText = inputTask.value.trim();

const newLi = document.createElement("li");
newLi.className = "task";

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.disabled = true;

taskInput.value = taskText;

newLi.appendChild(taskInput);

const botaodeletar = document.createElement("button");
botaodeletar.innerText = "DELETAR";
botaodeletar.className = "botaodeletar";

newLi.appendChild(botaodeletar);

const botaoeditar = document.createElement("button");
botaoeditar.innerText = "EDITAR";
botaoeditar.className = "botaoeditar";

newLi.appendChild(botaoeditar);

taskList.appendChild(newLi);

inputTask.value = "";

}else{
    err.style.display = "block";
    setTimeout(()=>{
        err.style.display = "none";
    }, 2000);
}
});



// Para deletar todas elas
clearAllBtn.addEventListener("click", (e)=>{
    e.preventDefault();


taskList.innerHTML = "";
});


// Para procurar as tarefas
inputSearch.addEventListener('keyup', (e)=>{
    e.preventDefault();

const taskText = inputSearch.value.toLowerCase();

const taskItens = document.querySelectorAll('.task');

for(let i = 0; i < taskItens.length; i++){
    const liTask = taskItens[i];

const taskTextItem = liTask
.querySelector(".disabled-task")
.value.toLowerCase();

if(taskTextItem.indexOf(searchText) !== -1){
liTask.style.display = "block";
}else{
liTask.style.display = "none";
}
}
});

// Para editar as tarefas

taskList.addEventListener("click", (e)=>{
    e.preventDefault();

if(e.target.classList.contains("editBtn")){

const input = e.target.parentElement.querySelector(".disabled-task");

input.disabled = !input.disabled;

if(!input.disabled){
    input.focus();
}

}
});