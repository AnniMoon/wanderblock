//Variablen
let hikeTable = document.getElementById("hike-table");
let addBtn = document.getElementById("add-btn");
let cancelBtn = document.getElementById("cancel-btn");
let editBtn = document.getElementById("edit-btn");
let deleteBtn = document.getElementById("delete-btn");

//Eventlistener

addBtn.addEventListener("click", () =>{
    //Neue Zeile
    let newRow = document.createElement("tr");
    //Neue Zellen
    let newCellName = document.createElement("td");
    let newCellDuration = document.createElement("td");
    let newCellHigh = document.createElement("td");
    let newCellLevel = document.createElement("td");
    let newCellLocation = document.createElement("td");

    newRow.append(newCellName, newCellDuration, newCellHigh, newCellLevel, newCellLocation);
    hikeTable.appendChild(newRow);
});
