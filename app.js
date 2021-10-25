let add = document.querySelector("form button");

add.addEventListener("click", e => {
    //prevent form from being submitted
    e.preventDefault();

    //get the input values
    let form = e.target.parentElement
    console.log(form.children);
})



