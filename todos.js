var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    "Fazer café", 
    "Estudar JavaScript",
    "Acessar comunidade da RocketSeat"
];

function renderTodos() {
    listElement.innerHTML = "";//Remove todo conteudo que estiver dentro do listElement

    for (todo of toDos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");//Cria um elemento Anchor.

        linkElement.setAttribute("href", "#");//Nossa elemento a precisa de href.

        var pos = toDos.indexOf(todo);//Retorna a posição que a variavel "todo" está.
        linkElement.setAttribute("onclick", "deleteTodo(" + pos +")");//Adiciona a função deleteTodo se ocorrer o evento de onclick no linkElemente(excluir).
        
        var linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);//Adiciona linkText dentro do linkElement.

        todoElement.appendChild(todoText);//Adiciona todoText dentro do todoELement
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);//Adiciona todoElement dentro do listElemente
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    toDos.push(todoText);
    inputElement.value = "";//Apaga o texto atual do input.
    renderTodos();//Renderiza o novo toDo.
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    toDos.splice(pos, 1)//Função que remove mais de um item em uma array.
    renderTodos();
}

function saveToStorage() {
    localStorage.setItem("list_todos", toDos);
}