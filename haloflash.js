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
   {
    question: "Which type of haloalkane is most reactive in SN1 reactions?",
    options: ["Primary", "Secondary", "Tertiary", "Methyl"],
    answer: "Tertiary",
    reasoning:
  },
  {
    question: "What is the stereochemistry of the SN2 reaction?",
    options: [
      "Retention of configuration",
      "Racemization",
      "Inversion of configuration",
      "No change",
    ],
    answer: "Inversion of configuration",
    reasoning:
  },
  {
    question:
      "Which of the following factors determines the reactivity of haloalkanes in SN2 reactions?",
    options: [
      "Carbocation stability",
      "Steric hindrance",
      "Electronegativity of the halogen",
      "Solvent polarity",
    ],
    answer: "Steric hindrance",
    reasoning:
  },
  {
    question: "What is the product when 1-bromopropane reacts with aqueous NaOH?",
    options: ["Propane", "Propanol", "Propene", "Propanone"],
    answer: "Propanol",
    reasoning:
  },
  {
    question: "Which of the following is a strong nucleophile?",
    options: ["H₂O", "NH₃", "OH⁻", "ROH"],
    answer: "OH⁻",
    reasoning:
  },
  {
    question: "What is the product when 2-chlorobutane reacts with excess NH₃?",
    options: ["2-aminobutane", "Butanol", "Butene", "Butane"],
    answer: "2-aminobutane",
    reasoning:
  },
  {
    question: "Which of the following haloalkanes is least reactive in SN2 reactions?",
    options: [
      "Methyl bromide",
      "1-bromopropane",
      "2-bromopropane",
      "2-bromo-2-methylpropane",
    ],
    answer: "2-bromo-2-methylpropane",
    reasoning:
  },
  {
    question: "What is the product when 1-bromopropane reacts with KCN in alcohol?",
    options: ["Propanol", "Propane", "Butanenitrile", "Propene"],
    answer: "Butanenitrile",
    reasoning:
  },
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
  {
    question: "Which of the following haloalkanes is most reactive in E1 reactions?",
    options: ["Primary", "Secondary", "Tertiary", "Methyl"],
    answer: "Tertiary",
    reasoning:
  },
  {
    question: "What is Zaitsev's rule?",
    options: [
      "The less substituted alkene is favored",
      "The more substituted alkene is favored",
      "The product with the least steric hindrance is favored",
      "The product with the most steric hindrance is favored",
    ],
    answer: "The more substituted alkene is favored",
    reasoning:
  },
  {
    question: "What is the product when 2-bromobutane undergoes E2 elimination?",
    options: ["Butane", "1-butene", "2-butene", "Butanol"],
    answer: "2-butene",
    reasoning:
  },
  {
    question: "Which of the following conditions favors elimination over substitution?",
    options: [
      "Low temperature",
      "High temperature",
      "Aqueous solution",
      "Weak base",
    ],
    answer: "High temperature",
    reasoning:
  },
  {
    question: "What is the product when 1-bromo-2-methylpropane undergoes E1 elimination?",
    options: ["2-methylpropene", "1-butene", "2-butene", "Propane"],
    answer: "2-methylpropene",
    reasoning:
  },
  {
    question: "What is the rate-determining step in the E1 mechanism?",
    options: [
      "Formation of the carbocation",
      "Deprotonation",
      "Nucleophilic attack",
      "Bond breaking",
    ],
    answer: "Formation of the carbocation",
    reasoning:
  },
  {
    question: "Which of the following is a common leaving group in elimination reactions?",
    options: ["OH⁻", "NH₂⁻", "Br⁻", "CN⁻"],
    answer: "Br⁻",
    reasoning:
  },
  {
    question: "What is the product when 2-chloropropane reacts with KOH in alcohol?",
    options: ["Propane", "Propanol", "Propene", "Propanone"],
    answer: "Propene",
    reasoning:
  },
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
  },
  {
    question: "What is the difference between E1 and E2 reactions?",
    options: [
      "E1 is bimolecular, E2 is unimolecular",
      "E1 is unimolecular, E2 is bimolecular",
      "E1 involves inversion of configuration, E2 involves racemization",
      "E1 is favored by primary haloalkanes, E2 is favored by tertiary haloalkanes",
    ],
    answer: "E1 is unimolecular, E2 is bimolecular",
    reasoning:
  },
  {
    question: "What is the product when 1-bromopropane reacts with water?",
    options: ["Propane", "Propanol", "Propene", "Propanone"],
    answer: "Propanol",
    reasoning:
  },
  {
    question: "What is the product when 2-bromopropane reacts with sodium methoxide?",
    options: ["Propane", "Propanol", "Methoxypropane", "Propene"],
    answer: "Methoxypropane",
    reasoning:
  },
  {
    question: "What is the product when 1-bromopropane reacts with sodium cyanide?",
    options: ["Propanol", "Butanenitrile", "Propane", "Propene"],
    answer: "Butanenitrile",
    reasoning:
  },
  {
    question:
      "What is the difference between nucleophilic substitution and elimination reactions?",
    options: [
      "Substitution replaces a leaving group, elimination removes a leaving group and forms a double bond",
      "Substitution forms a double bond, elimination replaces a leaving group",
      "Substitution is favored by tertiary haloalkanes, elimination is favored by primary haloalkanes",
      "Substitution is unimolecular, elimination is bimolecular",
    ],
    answer:
      "Substitution replaces a leaving group, elimination removes a leaving group and forms a double bond",
    reasoning:
  },
  {
    question: "What is the product when 1-bromo-2-methylpropane reacts with water?",
    options: ["2-methylpropanol", "2-methylpropene", "Propane", "Propanol"],
    answer: "2-methylpropanol",
    reasoning:
  },
  {
    question: "What is the difference between Zaitsev's rule and Hofmann's rule?",
    options: [
      "Zaitsev's rule favors the more substituted alkene, Hofmann's rule favors the less substituted alkene",
      "Zaitsev's rule favors the less substituted alkene, Hofmann's rule favors the more substituted alkene",
      "Zaitsev's rule applies to SN1 reactions, Hofmann's rule applies to SN2 reactions",
      "Zaitsev's rule applies to elimination reactions, Hofmann's rule applies to substitution reactions",
    ],
    answer:
      "Zaitsev's rule favors the more substituted alkene, Hofmann's rule favors the less substituted alkene",
    reasoning:
  },
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
