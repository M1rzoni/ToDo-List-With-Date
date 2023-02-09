let todos = [
  {
    title: "Prvi Element",
    dueDate: "2021-10-03",
    id: "id1",
  },
  {
    title: "Drugi Element",
    dueDate: "2023-11-4",
    id: "id2",
  },
  {
    title: "Treci Element",
    dueDate: "2023-2-8",
    id: "id3",
  },
];

todos.style = "padding: 5px 5px 5px 5px";

//create a todo

function createTodo(title, dueDate) {
  const id = " " + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });
}

//delete todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    //ako id od ove todo liste jedanm idtodelete funckiji, vraca false
    //za sve ostalo, return tacno.
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
}

render();

function addTodo() {
  let textbox = document.getElementById("todo-title");
  let title = textbox.value;

  const datePick = document.getElementById("date-pick");
  const dueDate = datePick.value;

  createTodo(title, dueDate);

  render();
}

function deleteToDo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

function render() {
  //reset list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    let elemenet = document.createElement("div");
    elemenet.innerText = todo.title + " " + todo.dueDate;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style = "font-size: 15px";
    deleteButton.style = "margin-left: 20px";
    deleteButton.onclick = deleteToDo;
    deleteButton.id = todo.id;
    elemenet.appendChild(deleteButton);

    let todoList = document.getElementById("todo-list");
    todoList.appendChild(elemenet);
  });
}
