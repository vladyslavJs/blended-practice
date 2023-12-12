const button = document.querySelector('.input-container button');

const input = document.querySelector('.input-container input');

const list = document.querySelector('.todo-list');

//call-back function
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'todo-list-item';
    li.innerText = input.value;
    
    const deleteBt = document.createElement('button');
    deleteBt.innerText = 'Delete';
    li.appendChild(deleteBt);
    list.appendChild(li);
    input.value = '';

    deleteBt.addEventListener('click', () => {
        list.removeChild(li);
    })
});

// console.log(button);
// console.log(input);
// console.log(list);