function addItem(){
    let Div = document.createElement('div')
    Div.id = 'tasks'
    document.getElementById('container').append(Div)
    let Item = document.createElement("h2")
    Item.id = 'newitem'
    let itemname = document.getElementById('myinput').value
    console.log(document.getElementById('myinput').value)
    Item.textContent = itemname
    Div.appendChild(Item)
    let delButton = document.createElement('button')
    delButton.id = 'delItem'
    delButton.className = 'button'
    Div.appendChild(delButton)
    delButton.onclick = deleter
    Div.onclick = checker
}

function deleter() {
    Item = this.parentElement
    Item.remove()
}

function checker(){
    Div = this
    if (Div.style.backgroundColor === 'green'){
        Div.style.backgroundColor =  'rgba(128, 0, 0, .5)'
    }
    else{
        Div.style.backgroundColor = 'green'
    }
}