const idUsuario = localStorage.getItem('idUser')

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
botaodeletar.innerText = "Excluir";
botaodeletar.className = "botaodeletar";

newLi.appendChild(botaodeletar);

const botaoeditar = document.createElement("button");
botaoeditar.innerText = "Editar";
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



// Para editar as tarefas

async function finalizarEdicao(posicao, novoTexto, idTarefa) {
    const userId = sessionStorage.getItem('userId')
    const tarefaAtualizada = {
        id: idTarefa,
        tarefa: novoTexto,
        concluida: minhaListaDeItens[posicao].concluida,
        idUsuario: userId
    }

    try {
        const response = await fetch(`http://127.0.0.1:5080/tarefas/${idTarefa}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tarefaAtualizada)
        })

        if (!response.ok) {
            throw new Error('Erro ao atualizar tarefa')
        }

        // Atualiza a tarefa na lista local
        minhaListaDeItens[posicao].tarefa = novoTexto

        mostrarTarefas()
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error)
    }

}

// comentar tarefas 



