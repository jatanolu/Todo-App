function addItem() {
  let Div = document.createElement("div");
  Div.id = "tasks";
  this.parentElement.parentElement.append(Div);
  let Item = document.createElement("h2");
  inputV = this.parentElement.children[0].value;
  Item.id = "newitem";
  Item.textContent = inputV;
  Div.appendChild(Item);
  let delButton = document.createElement("button");
  delButton.id = "delItem";
  delButton.className = "button";
  delButton.textContent = "X";
  Div.appendChild(delButton);
  delButton.onclick = deleter;
  Div.onclick = checker;
}

function deleter() {
  Item = this.parentElement;
  Item.remove();
}

function checker() {
  Div = this;
  if (Div.style.backgroundColor === "green") {
    Div.style.backgroundColor = "rgba(128, 0, 0, .5)";
    Div.style.textDecoration = "none";
  } else {
    Div.style.backgroundColor = "green";
    Div.style.textDecoration = "line-through";
  }
}

function addList() {
  let Div = document.createElement("div");
  Div.id = "container";
  document.body.append(Div);
  Title = document.createElement("h1");
  Title.textContent = document.getElementById("listName").value;
  Div.append(Title);
  let InputDiv = document.createElement("div");
  InputDiv.id = "inputdiv";
  Div.append(InputDiv);
  let Input = document.createElement("input");
  Input.id = "myinput";
  Input.placeholder = "Task";
  InputDiv.append(Input);
  let Button = document.createElement("button");
  Button.className = "inputbutton";
  Button.textContent = "Add Item";
  Button.setAttribute("onclick", "addItem.call(this)");
  InputDiv.append(Button);
  let delButton = document.createElement("button");
  delButton.id = "delItem";
  delButton.className = "button";
  delButton.textContent = "X";
  delButton.onclick = deleteList;
  InputDiv.append(delButton);
}

function deleteList() {
  Item = this.parentElement.parentElement;
  Item.remove();
}
