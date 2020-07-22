// baza

const taskBase = [
  { id: 0, task: "wstać i się uczyć" },
  { id: 1, task: "powtórzyć coś dla utrwalenia" },
  { id: 2, task: " coś dla utrwalenia" },
  { id: 3, task: " utrwalenia" },
];
//usuwanie zadań
const deleteTask = e => {
  e.preventDefault()
  taskBase.splice(e.target.className, 1)
  let idd = 0;
  const newBase = [];
  taskBase.forEach(task => {
    const newTask = { id: idd, task: task.task }
    newBase.push(newTask)
    idd++;
  })
  taskBase.splice(0)
  newBase.forEach(task => {
    taskBase.push(task)
  });
  printTasks()
}
//edytowanie zadań
const editValue = e => {
  taskBase[e.target.className].task = e.target.value;
  e.path[0].remove();
  printTasks()
}
const editTask = e => {
  e.preventDefault()
  const paragraphForEditTask = document.createElement('p')
  const inputForEditTask = document.createElement('input')
  inputForEditTask.classList.add(e.target.className);
  inputForEditTask.value = taskBase[e.target.className].task;
  paragraphForEditTask.appendChild(inputForEditTask);
  document.querySelector(`li:nth-child(${e.target.className * 1 + 1})`).insertBefore(paragraphForEditTask, document.querySelector(`li:nth-child(${e.target.className * 1 + 1})>button`))
  document.querySelector(`li:nth-child(${e.target.className * 1 + 1}) p`).remove()
  inputForEditTask.addEventListener('change', editValue)
  // taskBase[e.target.className].task =
}
//wyświetlenie zadań
const ul = document.querySelector('ul.taskList')
const printTasks = () => {
  ul.textContent = "";
  taskBase.forEach(task => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const btnDel = document.createElement('button');
    const btnEdit = document.createElement('button');
    p.textContent = task.task;
    btnDel.textContent = "Usuń";
    btnEdit.textContent = "Edytuj";
    li.classList.add(task.id)
    p.classList.add(task.id)
    btnDel.classList.add(task.id)
    btnEdit.classList.add(task.id)
    btnDel.addEventListener('click', deleteTask)
    btnEdit.addEventListener('click', editTask)
    li.appendChild(p)
    li.appendChild(btnDel)
    li.appendChild(btnEdit)
    ul.appendChild(li)
  })
}

//dodawanie zadań

const addTaskForm = document.querySelector('form.addTask')

const addTask = e => {
  e.preventDefault();
  const newTask = {
    id: taskBase.length,
    task: e.target[0].value,
  }
  taskBase.push(newTask)
  e.target[0].value = "";
  printTasks()
}
addTaskForm.addEventListener('submit', addTask)
//tylko wydrukowanie zadań
printTasks()

