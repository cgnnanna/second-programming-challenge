let groceryList = [];

const enterItem = (event) => {
    if(event.keyCode === 13){
        return addItem();
    }
}

const addItem = () => {
    let listItem = document.getElementById("list").value;
    if(listItem !== ""){
        groceryList.push(listItem);
    }
    document.getElementById("list").value = "";
    document.getElementById("list").focus();
    console.log(groceryList);
    viewTable();
}

const viewTable = () => {
    let displayTable = "<caption>Grocery List</caption>" +
        "<tr><th>I.D</th><th>Item</th><th>Action</th></tr>";
    for (let i = 0; i < groceryList.length; i++) {
        let item = groceryList[i];
        let removeButton = `<button class="button" type="button" id="${i}" onclick="removeItem(event)"><i id="${i}" class="far fa-trash-alt"></i></button>`;
        let upButton = `<button class="button" type="button" id="${i}" name="up" onclick="move(event)"><i class="fas fa-level-up-alt"></i></button>`;
        let downButton = `<button class="button" type="button" id="${i}" name="down" onclick="move(event)"><i class="fas fa-level-down-alt"></i></button>`;
        displayTable += `<tr><td>${i}</td><td>${item}</td><td>${removeButton} ${i!=0 ? upButton:""}  ${i!=groceryList.length-1 ? downButton:""}</td></tr>`;
    }
    displayTable = groceryList.length < 1 ? "" : displayTable;
    document.getElementById("demo").innerHTML = displayTable;
}

const removeItem = (event) => {
    let id = event.target.id;
    groceryList.splice(id, 1);
    viewTable();
}

const move = (event) => {
        let id = parseInt(event.path[1].id);
        console.log(event);
        let action = event.path[1].name;
        if(action =="up"){
            console.log("up");
            let temp = groceryList[id-1];
            groceryList[id-1] = groceryList[id];
            groceryList[id] = temp;
        }
        else if(action =="down"){
            console.log("down");   
            let temp = groceryList[id+1];
            groceryList[id+1] = groceryList[id];
            groceryList[id] = temp;
        }
        viewTable();
    }
// const doIt = (a, b, c) => {
//     return a + b + c;
// }
// const doIt = (a, b) => {
//     return a + b;
// }
// const doIt = (a) => {
//     return a;
// }
// doIt("Chinyere", "Nnanna");