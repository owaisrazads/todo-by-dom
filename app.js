const input = document.querySelector("#text");
const ul = document.querySelector("#ulList");

function createElement(userElement, userText) {
  const element = document.createElement(userElement);
  const textNode = document.createTextNode(userText);
  element.appendChild(textNode);
  return element;
}

function addTodo(e) {
  e.preventDefault();
  const list = createElement("LI", input.value);
  const editButton = createElement("BUTTON", "edit");
  editButton.setAttribute("onclick", "editTodo(this)");
  const deleteButton = createElement("BUTTON", "delete");
  deleteButton.setAttribute("onclick", "deleteTodo(this)");
  list.appendChild(editButton);
  list.appendChild(deleteButton);
  ul.appendChild(list);
  input.value = "";
}

function deleteTodo(element) {
  ul.removeChild(element.parentNode);
}
function editTodo(element) {
  const newValue = prompt("enter new value");
  element.parentNode.childNodes[0].nodeValue = newValue;
}