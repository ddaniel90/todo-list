//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Events Listener
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(e) {
	//prevent form for submiting
	e.preventDefault();
	//create todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	//create Li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	//check mark button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
	//check tash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);
	//append to list
	todoList.appendChild(todoDiv);
	//clear todo Input value
	todoInput.value = '';
}
