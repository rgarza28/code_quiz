//Variables tying to html elements
var startButton = document.getElementById("start-bttn")
var questionContainerElement = document.getElementById
    ("question-container")
var correctAnswer = document.getElementById("correctAnswer")
var incorrectAnswer = document.getElementById("incorrectAnswer")

var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var gameOver = document.getElementById("over");
var finalScore = document.getElementById("final-score");
var startSection = document.getElementById('start-section');

var userInitials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

var seconds = 100, $seconds = document.querySelector('#countdown');
var countDownEnabled = false;

let shuffledQuestions
var currentQuestionIndex = 0

//Quiz questions array
const questions = [
    {
        question: "What is a Boolean?",
        answers: [
            { text: "Numbers", correct: false },
            { text: "A group of letters", correct: false },
            { text: "A true false statement", correct: true },
            { text: "A bean", correct: false },
        ]
    },
    {
        question: "How can a variable be declared?",
        answers: [
            { text: "var", correct: false },
            { text: "const", correct: false },
            { text: "let", correct: false },
            { text: "all the above", correct: true },
        ]
    },
    {
        question: "What is the reccomended location for placing the .js file link in the html file?",
        answers: [
            { text: "Head", correct: false },
            { text: "End of body", correct: true },
            { text: "Beginning of body", correct: false },
            { text: "Below body", correct: false },
        ]
    },
    {
        question: "How many columns are present in the Bootstrap Grid System?",
        answers: [
            { text: "12", correct: true },
            { text: "10", correct: false },
            { text: "8", correct: false },
            { text: "6", correct: false },
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ______?",
        answers: [
            { text: "{}", correct: false },
            { text: "()", correct: true },
            { text: "[]", correct: false },
            { text: "<>", correct: false },

        ]
    }
]

const amountQuestions = questions.length - 1;

//Start Game
startButton.addEventListener("click", startGame);
function startGame() {
    countDownEnabled = true;
    countdown();
    startSection.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    startButton.classList.add("hide")
    showQuestion(currentQuestionIndex)

}

//Shows questions
function showQuestion(index) {
    answerButtonsElement.innerHTML = '';
    questionElement.innerText = questions[index].question
    questions[index].answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("bttn")
        if (answer.correct) {
            button.dataset.correct = 'true';
        } else {
            button.dataset.correct = 'false';
        }

        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//Select answer for each question
function selectAnswer() {
    if (this.dataset.correct == "true") {
        //countDownEnabled = false;
        correctAnswer.classList.remove("hide")
        setTimeout(() => {
            correctAnswer.classList.add("hide")
        }, 1000);
        if (currentQuestionIndex < amountQuestions) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);


        } else {
            // console.log('game was ended');
            countDownEnabled = false;
            endGame();

        }

    } else {
        incorrectAnswer.classList.remove("hide")
        setTimeout(() => {
            incorrectAnswer.classList.add("hide")
        }, 1000);
        if (seconds > 10) {
            seconds -= 10;
        } else {
            seconds = 1;
        }
        if (currentQuestionIndex < amountQuestions) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);


        } else {
            // console.log('game was ended');
            countDownEnabled = false;
            endGame();

        }
    }
}



//Timer
function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
    if (seconds > 0 && countDownEnabled) {
        seconds--;
        setTimeout(countdown, 1000)

    }
    //time runs out
    else {
        endGame();
    }
};

//End Game
function endGame() {
    finalScore.innerHTML = seconds;
    gameOver.classList.remove('hide');
    questionContainerElement.classList.add("hide")
}

//Stores score and initals when submit button is clicked
submitButton.addEventListener("click", function () {
    localStorage.setItem("userScoreTemp", JSON.stringify(finalScore.innerHTML + " - " + userInitials.value));
    window.location.href = "highscores.html";
});