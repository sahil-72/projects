var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var start = document.getElementById('start-btn');
var stop = document.getElementById('stop-btn');


var startTimer;

start.addEventListener('click', () => {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    }

    else {
        alert('already running');
    }
});


// timer

function timer() {
    if (seconds.innerText != 0) {
        seconds.innerText--;
    }

    else if (minutes.innerText != 0 & seconds.innerText == 0) {
        seconds.innerText = 59;
        minutes.innerText--;
    }

    else if (minutes.innerText == 0 & seconds.innerText == 0) {

        alert('GG');
        clearInterval(startTimer);
    }

}

// stop button

stop.addEventListener('click', () => {
    clearInterval(startTimer);
    startTimer = undefined;
})




// buttons

var pomodoro = document.getElementById('pomodoro');
var shortBreak = document.getElementById('shortBreak');
var longBreak = document.getElementById('longBreak');

pomodoro.addEventListener('click', () => {
    minutes.innerText = 25;
    seconds.innerHTML = '00';
});

shortBreak.addEventListener('click', () => {
    minutes.innerText = 5;
    seconds.innerHTML = '00';
    clearInterval(startTimer);
    startTimer = undefined;
});

longBreak.addEventListener('click', () => {
    minutes.innerText = 10;
    seconds.innerHTML = '00';
    clearInterval(startTimer);
    startTimer = undefined;
});


// tasks

let taskInput = document.getElementById('inputText');
let addButton = document.getElementById('inputSubmit');
let taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

//  enter button

addButton.addEventListener('keypress', function(e) {
    if (e.key === 'enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // strike through

    const strikeButton = document.createElement('button');
    strikeButton.innerHTML = '<i class="bi bi-check-lg"></i>';
    strikeButton.addEventListener('click', () => {
        
        li.classList.toggle('line-through');
    });

    //remove task

    const remButton = document.createElement('button');
    remButton.innerHTML = '<i class="bi bi-x"></i>';
    remButton.addEventListener('click', () => {
        li.remove();
    })

    li.appendChild(strikeButton);
    li.appendChild(remButton);
    taskList.appendChild(li);
    taskInput.value = '';

}






























// script.js


// // Event listener for adding a task
// addButton.addEventListener('click', addTask);

// // Function to add a task
// function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === '') return; // Don't add empty tasks

//     // Create a new list item
//     const li = document.createElement('li');
//     li.textContent = taskText;

    

//     // Add the list item to the task list
//     taskList.appendChild(li);

//     // Clear the input field
//     taskInput.value = '';
// }
