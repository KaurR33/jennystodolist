var ul_list = document.querySelector('.list-ul');
var todo_button = document.querySelector('.todo-button');


todo_button.addEventListener("click",addtodo);


function addtodo(event){
    event.preventDefault(); //prevents from default behavior of event i think
    
    var list_div = document.createElement('div');
    list_div.classList.add('.todo_div');
    var li_element = document.createElement('li');

    // appending
    ul_list.appendChild(list_div); //appending to the ul
    list_div.appendChild(li_element);

    //delete and completed creating elements
    var delete_btn = document.createElement('button');
    deleted_btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    var deleted = deleted_btn.classList.add('.delete_button');

    var completed_btn = document.createElement('button');
    completed_btn.innerHTML = '<i class="far fa-check-square"></i>';
    var complete = completed_btn.classList.add('.complete');

    //adding icons to delete and completed
   

    //appending delete and completed elements to list_div
    list_div.appendChild(deleted);
    list_div.appendChild(complete);




}
