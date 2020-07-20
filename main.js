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
const editTask = e => {
  e.preventDefault()
  console.log(e.target.className)
  const inputForEditTask = document.createElement('input')
  inputForEditTask.classList.add('inputForEditTask');
  document.querySelector(`li:nth-child(${e.target.className * 1 + 1})`).appendChild(inputForEditTask)
  // taskBase[e.target.className].task =
}
//wyświetlenie zadań
const ul = document.querySelector('ul.taskList')
const printTasks = () => {
  ul.textContent = "";
  taskBase.forEach(task => {
    const li = document.createElement('li');
    const btnDel = document.createElement('button');
    const btnEdit = document.createElement('button');
    li.textContent = task.id + " " + task.task;
    btnDel.textContent = "Usuń";
    btnEdit.textContent = "Edytuj";
    btnDel.classList.add(task.id)
    btnEdit.classList.add(task.id)
    btnDel.addEventListener('click', deleteTask)
    btnEdit.addEventListener('click', editTask)
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

