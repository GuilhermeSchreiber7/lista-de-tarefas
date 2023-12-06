// as lets foram feitas para facilitar o desenvolvimento do código
let addButton = document.getElementById("add"); // botão de adcionar um item nas tarefas pendentes
let containertask = document.getElementById("containertask"); // espacço onde fica as tarefas pendentes
let inputcamp = document.getElementById("camporesult") // campo onde o usuario digita sua tarefa pendente 
let completetask = document.getElementById("containercompletetask") // campo onde fica as tarefas já feitas 

addButton.addEventListener("click", function(){
    let task = document.createElement("p"); //é criad o elemento que vai para uma let
    let buttonFinish = document.createElement("button") // cria o botão de finalizar ao lado da tarefa
    buttonFinish.textContent = "Finish" // texto que fica no botão
    inputcamp.focus(); // ira fazer que o foco fique sempre no input
    task.innerText = inputcamp.value; // adciona o texto do input dentro do elemento p que vai para a lista
    containertask.appendChild(task); // adciona o elemento p no espaço de tarefas pendentes
    task.appendChild(buttonFinish) // adciona o botão de finalizar ao lado do elemento p
    inputcamp.value = "" // limpa o texto digitado pelo usuario no input
    task.addEventListener("click", function(){ //função para remover da lista de tarefas pendentes e passar o elemento p para a lista de tarefas concluidas
        containertask.removeChild(task); // remove o elemento p da lista de tarefas pendentes
        completetask.appendChild(task); // adciona o elemento p na lista de tarefas concluidas
        task.removeChild(task.childNodes[1]) // remove o botão de finalizar
        inputcamp.focus();
    })
    document.getElementById("limpar2").addEventListener("click", function(){
       document.getElementById("containercompletetask").removeChild(task); // limpa os elementos da lista de tarefas concluidas
       inputcamp.focus();
    })
    
})