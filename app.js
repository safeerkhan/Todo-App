//Selectors
const todoInpupt=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");


//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) { 

    event.preventDefault();  
    console.log("Click"); 

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo =document.createElement('li');
    newTodo.innerText= todoInpupt.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement('button');
    completeButton.innerHTML= '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    const deleteButton= document.createElement('button');
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    todoInpupt.value="";
}
function deleteCheck(e) {
    const item=e.target;

    if(item.classList[0]==='delete-btn'){
        const todo = item.parentNode;
        todo.remove();
    }

    if(item.classList[0]==='complete-btn'){
        
        const todo = item.parentNode;
        todo.classList.add("completed");
    }
}