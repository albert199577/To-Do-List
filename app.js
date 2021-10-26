
let section = document.querySelector("section");
let add = document.querySelector("form button");

add.addEventListener("click", e => {
    //prevent form from being submitted
    e.preventDefault();

    //get the input values
    let form = e.target.parentElement
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;

    if (todoText === "") {
        alert("Please Enter some text.")
        return;
    }

    //create a todo 
    let todo =document.createElement("div");
    // create class for div
    todo.classList.add("todo");
    let text = document.createElement("p");
    // create class for p
    text.classList.add("todo-text");
    // add text innerText
    text.innerText = todoText;
    let time = document.createElement("p");
    // create class for p
    time.classList.add("todo-time");
    // add time innerText
    time.innerText = todoMonth + " / " + todoDate;
    //add text and time to todo list
    todo.appendChild(text);
    todo.appendChild(time);
    
    //create green check and red trash can
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fas fa-check-square"></i>';

    completeButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        todoItem.classList.toggle("done");
    })
    
    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";


    trashButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;

        todoItem.addEventListener("animationend", () => {
            todoItem.remove();
        })

        todoItem.style.animation = "scaleDown 0.5s forwards";
    })
    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    todo.style.animation = "scaleUp 0.5s forwards"

    //create an object
    let myTodo = {
        todoText: todoText,
        todoMonth: todoMonth,
        todoDate: todoDate
    }

    //store data into an array of objects
    let myList = localStorage.getItem("list");
    if (myList == null) {
        localStorage.setItem("list", JSON.stringify([myTodo]));
    } else {
        let myListArray = JSON.parse(myList);
        myListArray.push(myTodo);
        localStorage.setItem("list", JSON.stringify(myListArray));
    }

    console.log(JSON.parse(localStorage.getItem("list")))

    //clean the text input
    form.children[0].value = "";

    //add todo list to section
    section.appendChild(todo);
})



