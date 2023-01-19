function addItem(){
    var Item = document.createElement("h2")
    Item.setAttribute["id", "newitem"]
    var itemname = document.getElementById('myinput').value
    Item.setAttribute['innerHTML', itemname]
    document.append(Item)
}