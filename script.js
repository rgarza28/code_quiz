var startButton = document.getElementById("start-bttn")
var questionContainerElement = document.getElementById
    ("question-container")
var correctAnswer = document.getElementById("correctAnswer")
var incorrectAnswer = document.getElementById("incorrectAnswer")

var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var gameOver = document.getElementById('over');
var finalScore = document.getElementById('final-score');
var startSection = document.getElementById('start-section');

let shuffledQuestions
var currentQuestionIndex = 0

var seconds = 100, $seconds = document.querySelector('#countdown');
var countDownEnabled = false;

const questions = [
    {
        question: "What is a Boolean?",
        answers: [
            { text: "numbers", correct: false },
            { text: "a group of letters", correct: false },
            { text: "a true false statement", correct: true },
            { text: "a bean", correct: false },
        ]
    },
    {
        question: "Question 2",
        answers: [
            { text: "Answer 1", correct: false },
            { text: "Anwser 2", correct: false },
            { text: "Anwser 3", correct: true },
            { text: "Anwser 4", correct: false },
        ]
    },
    {
        question: "Question 3",
        answers: [
            { text: "Answer 5", correct: false },
            { text: "Answer 6", correct: false },
            { text: "Answer 7", correct: true },
            { text: "Answer 8", correct: false },
        ]
    },
    {
        question: "Question 4",
        answers: [
            { text: "Answer 9", correct: false },
            { text: "Answer 10", correct: false },
            { text: "Answer 11", correct: true },
            { text: "Answer 12", correct: false },
        ]
    },
    {
        question: "Question 5",
        answers: [
            { text: "Answer 13", correct: false },
            { text: "Answer 14", correct: false },
            { text: "Answer 15", correct: true },
            { text: "Answer 16", correct: false },

        ]
    }
]

const amountQuestions = questions.length - 1;

startButton.addEventListener("click", startGame)


function startGame() {
    countDownEnabled = true;
    countdown();
    //document.getElementById('start-section').classList.add('hide');
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    startSection.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    startButton.classList.add("hide")
    // setNextQuestion()
    showQuestion(currentQuestionIndex)
    // var seconds = 100, $seconds = document.querySelector('#countdown');
    // (function countdown() {
    //     $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
    //     if (seconds-- > 0) setTimeout(countdown, 1000)
    // })();
}

// function setNextQuestion() {
//     // resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])

// }

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

        // answer.correct ? button.dataset.correct = 'true' : button.dataset.correct = 'false';

        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// function resetState() {
//     // nextButton.classList.add("hide")
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//             (answerButtonsElement.firstChild)
//     }
// }
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
            console.log('game was ended');
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
            console.log('game was ended');
            countDownEnabled = false;
            endGame();

        }
    }
}




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

function endGame() {
    finalScore.innerHTML = seconds;
    gameOver.classList.remove('hide');
    questionContainerElement.classList.add("hide")
}