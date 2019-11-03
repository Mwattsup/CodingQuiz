var startBtn = document.getElementById("startBtn");
var timeCount = document.getElementById("timeCount");
var mainInfo = document.getElementById("mainInfo");
var container = document.getElementById("middlePage");
var choiceBtn = $("#answerBtns");
var newBtn = document.getElementById("newBtn");
var count = 300;

function countDown() {
    var timerInterval = setInterval(function () {
        count--;
        timeCount.innerHTML = count;
        if (count === 0) {
            clearInterval(timerInterval);
            container.innerHTML = 'Game Over!';
        }
    }, 1000);
}

function questInfo() {
    for (var i = 0; i < questions.length; i++) {
        mainInfo.innerHTML = (questions[i].quest);
        return;
    }
}

function answerBtns() {
    for (var i = 0; i < questions[0].choices.length; i++) {
        var newBtn = $("<div><button type=button id=newBtn>" + questions[0].choices[i] + "</button></div>");
        
        choiceBtn.append(newBtn);
    }
}

var el = document.getElementById("newBtn");
if (el) {
    el.addEventListener("click", awnserCheck);
}

function awnserCheck() {
    if (document.getElementById("answerBtns").onclick = function () {
        if (answerBtns = questions[i].answer) {
            container.innerHTML = '';
            mainInfo.innerHTML = '';
        }
        else {
            alert("Wrong!");
        }
    });
}


startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", questInfo);
startBtn.addEventListener("click", answerBtns);
