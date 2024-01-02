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

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });


const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
          <p><b>Address</b>: ${user.address.street}</p>
          <p><b>Zipcode</b>: ${user.address.zipcode}</p>
        </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}

