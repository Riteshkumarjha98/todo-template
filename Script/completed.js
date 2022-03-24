var todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);
var completed = JSON.parse(localStorage.getItem("completed")) || []


todoItems.map(function (elem,index) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = elem.itemName;
  var td2 = document.createElement("td");
  td2.innerText = elem.itemQty;

  var td3 = document.createElement("td");
  td3.innerText = elem.itemPriority;

  var td4 = document.createElement("td");
  td4.addEventListener("click", function () {
    markCompleteFunction(elem,index);
  });
  tr.append(td1, td2, td3);

  document.querySelector("#body").append(tr);
});

function markCompleteFunction(elem,index) {
  
  completed.push(elem);
  
      localStorage.setItem("completedTodo", JSON.stringify(completed));
      
}