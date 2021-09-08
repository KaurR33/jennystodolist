 
// global scope
//lexical scope
//block scope

//  O - always use let
// const vs let
// O1 - camel case 


const ul_list = document.querySelector(".list_ul");
const todo_button = document.querySelector(".todo_button");
const todo_input = document.querySelector(".todo_input");
const filter_list = document.querySelector(".filter_list");
const todo_container = document.querySelector(".todo-container");

// event listeners
document.addEventListener('DOMContentLoaded',loadToDo);
todo_button.addEventListener("click", addtodo);
ul_list.addEventListener("click", delete_list);
filter_list.addEventListener("change", filterthelist);

function addtodo(event) {
  event.preventDefault(); //prevents from default behavior of event i think

  const list_div = document.createElement("div");
  list_div.classList.add("todo_div");
  let li_element = document.createElement("li");
  li_element.classList.add("list_content");

  // appending
  //appending to the ul

  //adding list

  list_div.appendChild(li_element);

  li_element.innerText = todo_input.value;

  //adding to local storage
  saveLocalTodo(todo_input.value);

  //delete and completed creating elements
  let deleted_btn = document.createElement("button");
  deleted_btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleted_btn.classList.add("delete_button");

  let completed_btn = document.createElement("button");
  completed_btn.innerHTML = '<i class="far fa-check-square"></i>';
  completed_btn.classList.add("complete");

  //appending delete and completed elements to list_div

  /* PROBLEM 2 -SOLVED  ( just add flex )
        i  appended delete and complete buttons to list_div( which div that contains 
            li tag, delete button, mark button
            they are not in same line
            )
    */
  list_div.appendChild(deleted_btn);
  list_div.appendChild(completed_btn);

  ul_list.appendChild(list_div);
  //clear input value
  todo_input.value = "";
}

function delete_list(e) {
  let target = e.target;
  if (target.classList[0] === "delete_button") {
    //  target.parentElement.remove();
    let targetlist = target.parentElement;
    
    targetlist.classList.add("falling");
    deleteLocalStorage(targetlist);
    addEventListener("transitionend", function () {
      target.parentElement.remove();
    });
  }
  if (target.classList[0] === "complete") {
    let parent_div = target.parentElement;
    parent_div.classList.toggle("completed_deco");
  }
}

function filterthelist(e) {
  let todos = document.getElementsByClassName("todo_div");
  for (let val of todos) {
    switch (e.target.value) {
      case "all":
        val.style.display = "flex";
        break;
      case "completed":
        if (val.classList.contains("completed_deco")) {
          val.style.display = "flex";
        } else {
          val.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!val.classList.contains("completed_deco")) {
          val.style.display = "flex";
        } else {
          val.style.display = "none";
        }
        break;
    }
  }
}

function saveLocalTodo(todo_list_input) {
  let check;
  if (localStorage.getItem("check") === null) {
    check = [];
  } else {
    check = JSON.parse(localStorage.getItem("check"));
  }
  check.push(todo_list_input);
  localStorage.setItem("check", JSON.stringify(check));
}

// loading to do list from
function loadToDo(){
  let check;
  if (localStorage.getItem("check") === null) {
    check = [];
  } else {
    check = JSON.parse(localStorage.getItem("check"));
  }
  check.forEach(function(todo){
    const list_div = document.createElement("div");
    list_div.classList.add("todo_div");
    let li_element = document.createElement("li");
    li_element.classList.add("list_content");
  
    // appending
    //appending to the ul
  
    //adding list
  
    list_div.appendChild(li_element);
  
    li_element.innerText = todo;
  
   
    //delete and completed creating elements
    let deleted_btn = document.createElement("button");
    deleted_btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleted_btn.classList.add("delete_button");
  
    let completed_btn = document.createElement("button");
    completed_btn.innerHTML = '<i class="far fa-check-square"></i>';
    completed_btn.classList.add("complete");
  
    //appending delete and completed elements to list_div
  
    /* PROBLEM 2 -SOLVED  ( just add flex )
          i  appended delete and complete buttons to list_div( which div that contains 
              li tag, delete button, mark button
              they are not in same line
              )
      */
    list_div.appendChild(deleted_btn);
    list_div.appendChild(completed_btn);
  
    ul_list.appendChild(list_div);
    //clear input value
    todo_input.value = "";
  });
}

function deleteLocalStorage(todo){
  let check;
  if (localStorage.getItem("check") === null) {
    check = [];
  } else {
    check = JSON.parse(localStorage.getItem("check"));
  }
  let findIndex = todo.children[0].innerText;
  console.log(check.splice(check.indexOf(findIndex),1));
  localStorage.setItem('check',JSON.stringify(check));
  
}