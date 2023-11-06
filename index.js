
//open the form
var mainButton1 = document.getElementsByClassName('mainButton')[0]
var mainButton2 = document.getElementsByClassName('mainButton')[1]

document.getElementsByClassName('mainButton')[0].addEventListener ('click', function(){
document.getElementById('mainSection').classList.toggle ('show');
mainButton1.disabled = true;
mainButton2.disabled = true;
document.getElementsByClassName('form-control')[0].classList.remove ('delete');
document.getElementsByClassName('btnAdd')[0].classList.remove ('delete');
})


//show the tasks
document.getElementsByClassName('mainButton')[1].addEventListener ('click', function(){
document.getElementById('mainSection').classList.toggle ('show');
mainButton1.disabled = true;
mainButton2.disabled = true;
document.getElementsByClassName('form-control')[0].classList.add ('delete');
document.getElementsByClassName('btnAdd')[0].classList.add ('delete');
})


//close the form
document.getElementsByClassName('btnRadius')[0].addEventListener ('click', function(){
document.getElementById('mainSection').classList.toggle ('show')
mainButton1.disabled = false;
mainButton2.disabled = false;
})

//add the task pressing the Enter
document.getElementsByClassName('form-control')[0].addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    document.getElementsByClassName('btnAdd')[0].click();
  }
});

//add the task by click and validate the input field
document.getElementsByClassName('btnAdd')[0].addEventListener('click', function(){
var inputField = document.getElementsByClassName('form-control')[0].value;
var inputField1 = document.getElementsByClassName('form-control')[0];
var listOutput = document.querySelectorAll('ul li');
var list = document.querySelector('ul');
var lastElement = document.querySelector('ul').lastElementChild;


function validateData () {
  if (inputField.trim() == ''){
    inputField1.style.border = "2px solid red";
    inputField1.placeholder = "You didn't add any task!";
    return false;
  } else {
    inputField1.placeholder = "New task...";
    inputField1.style.border = "var(--bs-border-width) solid var(--bs-border-color)";
    var newTask = document.createElement("li");
    newTask.innerHTML = inputField;
    list.appendChild(newTask);

    newTask.classList.add("checked","listOutput");
    var newDiv = document.createElement("div");
    newDiv.classList.add("input-group-append","inputRightAlign");

    var doneButton = document.createElement("button");
    doneButton.classList.add("btn","btn-sm","btn-outline-secondary","doneTask");
    doneButton.innerHTML = " ✓ ";

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn","btn-sm","btn-outline-secondary","deleteTask");
    deleteButton.innerHTML = " ✕ ";


    newDiv.appendChild(doneButton);
    newDiv.appendChild(deleteButton);
    newTask.appendChild(newDiv);

    inputField1.value = "";

    //done task and delete task

    var doneButtons = document.getElementsByClassName('doneTask');

    for (var i = 0; i < doneButtons.length; i++) {
    doneButtons[i].addEventListener ("click", function(){
      this.parentElement.parentElement.classList.add("done")
    })

    }

    var deleteButtons = document.getElementsByClassName('deleteTask');

    for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener ("click", function(){
      this.parentElement.parentElement.classList.add ("delete")

    //clear the input Field
    // document.querySelector (".form-control").value.innerHTML="";


    })
    }

  }

}
validateData ();
   }
)
