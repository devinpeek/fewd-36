// Structure
// ------------------------------------------------


// Setup
// ------------------------------------------------
var form = document.querySelector("form");
var items = document.querySelector(".items");
var list = document.querySelector(".list");
var task = document.querySelector(".task");
var button = document.querySelector("button");
var date = document.querySelector(".date");
// var newCheck = document.querySelector("li");

// Events
// ------------------------------------------------
form.addEventListener("submit", addItem);
button.addEventListener("click", addItem);

function addItem(event){
	//Prevents default form behaviour
	event.preventDefault();

	//define the value that is input
	var newItemValue = task.value;
	var newItemDate = date.value;

	//created a new li element and defined it as newItem
	var li = document.createElement("li");
	var checkbox = document.createElement("input");
	var span = document.createElement("span");

	checkbox.setAttribute("type", "checkbox");
	span.textContent = newItemValue + " " + newItemDate;

	list.appendChild(li);
	li.appendChild(checkbox);
	li.appendChild(span);

	//Resets the form when the user presses enter
	form.reset();
}




