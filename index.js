function addItem(){
    let Item = document.createElement("h2")
    Item.setAttribute["id", "newitem"]
    let itemname = document.getElementById('myinput').value
    console.log(document.getElementById('myinput').value)
    Item.textContent = itemname
    document.getElementById('tasks').append(Item)
}