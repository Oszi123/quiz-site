var startButtonEl = document.querySelector("#start-quiz-button");
var startContainerEl = document.querySelector("#start-quiz-container");
var questionContainerEl = document.querySelector("#question-container");
var choicesArray = document.querySelectorAll(".choice");

function getQuestion() {
    startContainerEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    for (let i = 0; i < choicesArray.length; i++) {
        choicesArray[i].addEventListener("click", function (event) {
            console.log(event.target);
            var isCorrect = event.target.getAttribute("data-correct");
            if (isCorrect === "true") {
                console.log("You have selected the right answer")
            } else {
                console.log("Wrong!")
            }
        })
    }
}

startButtonEl.addEventListener("click", getQuestion)

