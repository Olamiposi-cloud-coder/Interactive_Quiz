const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
         const optionLabel = document.createElement('label');
        optionLabel.textContent = option;

        const radioButton = document.createElement('input');
        radioButton.type = "radio";
        radioButton.name = "answer";
        radioButton.value = option;
        radioButton.required = true;

        optionLabel.appendChild(radioButton);
        optionsElement.appendChild(optionLabel);
    });
}

function handleTaskClick(e) {
    e.preventDefault();
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const currentQuestion = quizQuestions[currentQuestionIndex];

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }
}

function showFinalScore() {
    quizContainer.innerHTML = `<h2>Quiz Completed</h2>
    <p>You scored ${score} out of ${quizQuestions.length} questions correctly!</p>`;
    // You can optionally include a button to restart the quiz or go back to the beginning.
    // For simplicity, I'm not adding that here.
}

showQuestion();
submitButton.addEventListener('click', handleTaskClick);