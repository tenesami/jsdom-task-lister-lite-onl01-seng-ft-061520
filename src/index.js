const main = document.querySelector("#main-content")
console.log(main)

//select the form id to grap the submit event 
const taskForm = document.querySelector("#create-task-form")

//slap it on the document or to display onto the page. where ? into the tasks id 
const taksList = document.querySelector("#tasks")

//listn to the sumit event 
taskForm.addEventListener("submit", function(e) {

        //To grap whatever user enter in the input 
        const newTask = document.querySelector("#new-task-description").value

        //prevent z html event form submit to use the js form submit 
        e.preventDefault()

        //slap it on the document or to display onto the page where ? into the tasks id 
        //do we have to wait untill the form submit happen to grap the task ? No
        // or does the task exit on the page? Yes 
        //should we have to grap it every time We hit submit?  no so we need to move 
        //it to the top of the page so we will grap it out side 

        taksList.innerHTML +=
            `<li>${newTask}
        <button data-action="delete"> X to delete </button>
        </li>`

        // const taskItem = document.createElement("li")
        // taskItem.innerText = newTask
        // taksList.appendChild(taskItem);

        //clears user input 
        taskForm.reset()
    })
    //the parent element know about z child so that we used 
    // the event listner over here
taksList.addEventListener("click", function(e) {
    if (e.target.dataset.action == "delete") {
        e.target.parentElement.remove()
    }
})


/* other way to to solve the lab 

document.addEventListener("DOMContentLoaded", () => {
    //grab all the necessary DOM elements

    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");

    //ul where new tasks will live on the DOM
    const newTaskUl = document.getElementById("tasks");

    //attach event listeners
    newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    appendNewTask(newTask);
    event.target.reset();
};
*/