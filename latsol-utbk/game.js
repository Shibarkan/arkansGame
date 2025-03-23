import questions from "./soal.js";

let currentQuestion = 0;
let score = 0;
let playerName = "";

document.getElementById("startGame").addEventListener("click", () => {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("questionNumber").innerText = `Soal ke: ${currentQuestion + 1}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.className = "px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white font-bold rounded w-full";
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) {
        score += 2;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

document.getElementById("skipButton").addEventListener("click", nextQuestion);

function endGame() {
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    document.getElementById("finalScore").innerText = `Nama: ${playerName}, Skor: ${score}`;

    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = "";

    questions.forEach((q, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="border border-gray-500 px-4 py-2 text-center">${index + 1}</td>
            <td class="border border-gray-500 px-4 py-2 break-words">${q.question}</td>
            <td class="border border-gray-500 px-4 py-2 text-center">${q.answer}</td>
            <td class="border border-gray-500 px-4 py-2 break-words">${q.explanation}</td>
        `;
        resultTable.appendChild(row);
    });
}

// Event listener untuk restart game
document.getElementById("restartButton").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById("resultScreen").classList.add("hidden");
    document.getElementById("startScreen").classList.remove("hidden");
});
