const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Jane Austen", "Mark Twain", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const nextBtn = document.getElementById("nextBtn");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <ul class="options">
            ${currentQuestion.options.map(option => `
                <li onclick="checkAnswer('${option}')">${option}</li>
            `).join('')}
        </ul>
    `;
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    nextBtn.disabled = false; // Enable Next button
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
}

nextBtn.addEventListener("click", () => {
    loadQuestion();
    nextBtn.disabled = true; // Disable Next button until answer is chosen
});

// Initialize quiz
loadQuestion();
