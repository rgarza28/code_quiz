var startButton = document.getElementById("start-bttn")
var questionContainerElement = document.getElementById
    ("question-container")

var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = doucment.createElement("button")
        button.innerText = answer.text
        button.classList.add("bttn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {

}

const questions = [
    {
        question: "What is a Boolean?",
        answers: [
            { text: "numbers", correct: false },
            { text: "a group of letters", correct: false },
            { text: "a true false statement", correct: true },
            { text: "a bean", correct: false },
        ]
    }

]

var seconds = 100, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
    if (seconds-- > 0) setTimeout(countdown, 1000)
})();