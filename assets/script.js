var now = (moment().format("dddd, MMMM Do YYYY"));
console.log(now);
var currentDay = $('#currentDay');
$("#currentDay").text(now);
//var textarea = document.querySelector("time-block");


// var addEvent = localStorage.getItem("time-block");
// console.log(toDo);
// var workDay = document.querySelector("container");
// function makeItWork(workDay) {
//     for(var i = 0; i < 9; i++) {
//     workDay.innerHTML += `<div class="row">
//     <p class="hour">9 AM</p>
//     <textarea class="time-block"></textarea>
//     <button class="saveBtn"></button>`
//     }
// }
// makeItWork(workDay);





var saveBtn = document.querySelector('.saveBtn');
// saveBtn.addEventListener('click', function(addToDo) {
//     var toDo = document.querySelector("time-block");
//     function addToDo() {
//         var newToDo = {
//             tryNow : toDo,
//         };
//     localStorage.setItem("toDoString", JSON.stringify(newToDo));
//     }
//     addToDo();
// })
var toDoInput = document.querySelector("time-block");

var todos = [];
// function renderTodos() {
//     toDoInput.innerHTML = "";
// }

function init () {
    var storedtodos = JSON.parse(localStorage.getItem("todos"));
    if (storedtodos !== null) {
        todos = storedtodos;
    }
    // renderTodos ();
}

function storeTodos() { 
    localStorage.setItem("todos", JSON.stringify(todos));
}
saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var todoText = toDoInput;
    if (toDoInput === "") {
        return;
      }
    
      // Add new todoText to todos array, clear the input
      todos.push(todoText);
    //   toDoInput.value = "";
    
      // Store updated todos in localStorage, re-render the list
      storeTodos();
    //   renderTodos();
});
init();


// var toDoInput = document.querySelector("time-block");

// saveBtn.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       todos.splice(index, 1);
  
//       // Store updated todos in localStorage, re-render the list
//       storeTodos();
//       renderTodos();
//     }
//   });