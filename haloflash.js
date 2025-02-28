// Quiz 1: Nucleophilic Substitution (SN1 and SN2)
const quiz1 = [
  {
    question: "What is the mechanism of the SN1 reaction?",
    options: [
      "Bimolecular nucleophilic substitution",
      "Unimolecular nucleophilic substitution",
      "Elimination reaction",
      "Rearrangement reaction",
    ],
    answer: "Unimolecular nucleophilic substitution",
    reasoning:
      "SN1 is a unimolecular nucleophilic substitution reaction where the rate-determining step involves the formation of a carbocation.",
  },
  {
    question: "What is the rate-determining step in the SN1 mechanism?",
    options: [
      "Formation of the carbocation",
      "Nucleophilic attack",
      "Deprotonation",
      "Bond breaking",
    ],
    answer: "Formation of the carbocation",
    reasoning:
      "The rate-determining step in SN1 is the formation of the carbocation, which is the slowest step in the mechanism.",
  },
  // Add more questions here...
];

// Quiz 2: Haloalkane Elimination
const quiz2 = [
  {
    question: "What is the product of an E1 elimination reaction?",
    options: ["Alkane", "Alkene", "Alcohol", "Ether"],
    answer: "Alkene",
    reasoning:
      "E1 elimination reactions produce alkenes by removing a leaving group and a proton from adjacent carbons.",
  },
  {
    question: "What is the role of the base in an E2 elimination reaction?",
    options: [
      "It attacks the carbon directly",
      "It abstracts a proton",
      "It forms a carbocation",
      "It donates electrons",
    ],
    answer: "It abstracts a proton",
    reasoning:
      "In E2 reactions, the base abstracts a proton from the β-carbon, leading to the formation of a double bond.",
  },
  // Add more questions here...
];

// Quiz 3: Haloalkane Reaction Processes
const quiz3 = [
  {
    question: "What are the steps in the SN1 mechanism?",
    options: [
      "Formation of carbocation, nucleophilic attack, deprotonation",
      "Nucleophilic attack, formation of carbocation, deprotonation",
      "Deprotonation, formation of carbocation, nucleophilic attack",
      "Bond breaking, nucleophilic attack, deprotonation",
    ],
    answer: "Formation of carbocation, nucleophilic attack, deprotonation",
    reasoning:
      "SN1 involves three steps: (1) Formation of a carbocation, (2) Nucleophilic attack, and (3) Deprotonation.",
  },
  {
    question: "What is the difference between SN1 and SN2 reactions?",
    options: [
      "SN1 is bimolecular, SN2 is unimolecular",
      "SN1 is unimolecular, SN2 is bimolecular",
      "SN1 involves inversion of configuration, SN2 involves racemization",
      "SN1 is favored by primary haloalkanes, SN2 is favored by tertiary haloalkanes",
    ],
    answer: "SN1 is unimolecular, SN2 is bimolecular",
    reasoning:
      "SN1 is unimolecular (depends only on the concentration of the haloalkane), while SN2 is bimolecular (depends on both the haloalkane and nucleophile).",
  },
  // Add more questions here...
];

// Function to display flashcards for a quiz
function displayFlashcards(quiz, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous content
  quiz.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("flashcard-item");
    card.innerHTML = `
      <p><strong>Question ${index + 1}:</strong> ${item.question}</p>
      <ul>
        ${item.options
          .map((option) => `<li><input type="radio" name="q${index}" value="${option}"> ${option}</li>`)
          .join("")}
      </ul>
      <button onclick="checkAnswer('${item.answer}', 'q${index}', '${item.reasoning}')">Check Answer</button>
      <p class="answer-feedback" id="feedback-q${index}"></p>
      <p class="reasoning" id="reasoning-q${index}"></p>
    `;
    container.appendChild(card);
  });
}

// Function to check the answer
function checkAnswer(correctAnswer, questionId, reasoning) {
  const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
  const feedback = document.getElementById(`feedback-${questionId}`);
  const reasoningElement = document.getElementById(`reasoning-${questionId}`);
  if (selectedOption) {
    if (selectedOption.value === correctAnswer) {
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
      feedback.style.color = "red";
    }
    reasoningElement.textContent = `Reasoning: ${reasoning}`;
  } else {
    feedback.textContent = "Please select an option.";
    feedback.style.color = "red";
    reasoningElement.textContent = "";
  }
}

// Function to show a quiz
function showQuiz(quizId) {
  // Hide all quiz sections
  document.querySelectorAll(".quiz-section").forEach((section) => {
    section.classList.remove("visible");
  });

  // Show the selected quiz section
  const quizSection = document.getElementById(quizId);
  quizSection.classList.add("visible");

  // Load the quiz questions
  if (quizId === "quiz1") {
    displayFlashcards(quiz1, "quiz1-flashcards");
  } else if (quizId === "quiz2") {
    displayFlashcards(quiz2, "quiz2-flashcards");
  } else if (quizId === "quiz3") {
    displayFlashcards(quiz3, "quiz3-flashcards");
  }
}
