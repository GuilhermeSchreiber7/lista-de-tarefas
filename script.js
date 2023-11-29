let tarefas = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");
let descricao = document.getElementById("descricao");

function addLI(){
    let ntask = document.createElement("li");
    let ultimo = tarefas.childElementCount;
    ntask.dataset.index = ultimo;
    ntask.innerHTML = descricao.value;
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.addEventListener("click", function(e) {
        e.preventDefault();
        let index = e.target.parentNode.dataset.index;
        remover(parseInt(index));
    });
    a.textContent = "- Finalizar";
    ntask.appendChild(a);
    tarefas.appendChild(ntask);
    limpar();
}
function remover(item){
    let li = tarefas.children[item];
    tarefas.removeChild(li)
    adicionarFinalizada(li);
}

function limpar() {
    descricao.value = "";
    descricao.focus();
}

function adicionarFinalizada(item) {
    alert(item.textContent.substr(0, item.textContent.indexOf("- Finalizar")));
    finalizadas.appendChild(item.textContent.substr(0, item.textContent.indexOf("- Finalizar")));
}