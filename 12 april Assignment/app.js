// To Do App

// Task 1: Implement the Add Function. 

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //call the generateTemplate function to add the Todo to the list. 
    if (todo.length) {
        generateTemplate(todo);
        // remove the todo from the input field.
        addForm.reset();
    }
})

//Implement a function that creates an HTML template that we can add to the DOM. 

const generateTemplate = (todo) => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
</li>
    `;
    list.innerHTML += html;

}


// Task 2: Implement the Delete Function. 

list.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

// Task 3: Implement the Searching & Filtering Function. 

const search = document.querySelector('.search input');

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
})

// Implement a function that takes the term and matches with the todo item list. 

const filteredTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered')) 
}

// Task 4: Add another "complete" icon right next to the delete icon. 
// Task 5: Implement a function that takes the "complete icon" and adds a click event listener
// Task 6: background color (dull), strikethrough, add to the completed task