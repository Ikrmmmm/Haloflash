// Quiz Data
const quizzes = {
  quiz1: [
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
        "Tertiary haloalkanes are most reactive in SN1 reactions because they form the most stable carbocations.",
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
        "SN2 reactions proceed with a backside attack, leading to inversion of configuration at the carbon center.",
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
        "SN2 reactions are hindered by steric effects. Less steric hindrance means higher reactivity.",
    },
    {
      question: "What is the product when 1-bromopropane reacts with aqueous NaOH?",
      options: ["Propane", "Propanol", "Propene", "Propanone"],
      answer: "Propanol",
      reasoning:
        "Aqueous NaOH replaces the bromine atom with a hydroxyl group, forming propanol.",
    },
    {
      question: "Which of the following is a strong nucleophile?",
      options: ["H₂O", "NH₃", "OH⁻", "ROH"],
      answer: "OH⁻",
      reasoning:
        "OH⁻ is a strong nucleophile because it is negatively charged and has a lone pair of electrons.",
    },
    {
      question: "What is the product when 2-chlorobutane reacts with excess NH₃?",
      options: ["2-aminobutane", "Butanol", "Butene", "Butane"],
      answer: "2-aminobutane",
      reasoning:
        "Excess NH₃ replaces the chlorine atom with an amino group, forming 2-aminobutane.",
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
        "2-bromo-2-methylpropane is least reactive in SN2 due to high steric hindrance at the α-carbon.",
    },
    {
      question: "What is the product when 1-bromopropane reacts with KCN in alcohol?",
      options: ["Propanol", "Propane", "Butanenitrile", "Propene"],
      answer: "Butanenitrile",
      reasoning:
        "KCN replaces the bromine atom with a cyano group, forming butanenitrile.",
    },
  ],
  quiz2: [
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
        "Tertiary haloalkanes are most reactive in E1 reactions because they form the most stable carbocations.",
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
        "Zaitsev's rule states that the more substituted alkene is the major product in elimination reactions.",
    },
    {
      question: "What is the product when 2-bromobutane undergoes E2 elimination?",
      options: ["Butane", "1-butene", "2-butene", "Butanol"],
      answer: "2-butene",
      reasoning:
        "E2 elimination of 2-bromobutane produces 2-butene as the major product due to Zaitsev's rule.",
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
        "High temperatures favor elimination reactions because they require more energy.",
    },
    {
      question: "What is the product when 1-bromo-2-methylpropane undergoes E1 elimination?",
      options: ["2-methylpropene", "1-butene", "2-butene", "Propane"],
      answer: "2-methylpropene",
      reasoning:
        "E1 elimination of 1-bromo-2-methylpropane produces 2-methylpropene as the major product.",
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
        "The rate-determining step in E1 is the formation of the carbocation, which is the slowest step.",
    },
    {
      question: "Which of the following is a common leaving group in elimination reactions?",
      options: ["OH⁻", "NH₂⁻", "Br⁻", "CN⁻"],
      answer: "Br⁻",
      reasoning:
        "Br⁻ is a good leaving group because it is stable after departure.",
    },
    {
      question: "What is the product when 2-chloropropane reacts with KOH in alcohol?",
      options: ["Propane", "Propanol", "Propene", "Propanone"],
      answer: "Propene",
      reasoning:
        "KOH in alcohol favors elimination, producing propene from 2-chloropropane.",
    },
  ],
  quiz3: [
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
    {
      question: "What is the product when 1-bromopropane reacts with water?",
      options: ["Propane", "Propanol", "Propene", "Propanone"],
      answer: "Propanol",
      reasoning:
        "Water replaces the bromine atom with a hydroxyl group, forming propanol.",
    },
    {
      question: "What is the product when 2-bromopropane reacts with sodium methoxide?",
      options: ["Propane", "Propanol", "Methoxypropane", "Propene"],
      answer: "Methoxypropane",
      reasoning:
        "Sodium methoxide replaces the bromine atom with a methoxy group, forming methoxypropane.",
    },
    {
      question: "What is the product when 1-bromopropane reacts with sodium cyanide?",
      options: ["Propanol", "Butanenitrile", "Propane", "Propene"],
      answer: "Butanenitrile",
      reasoning:
        "Sodium cyanide replaces the bromine atom with a cyano group, forming butanenitrile.",
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
        "Substitution replaces a leaving group with a nucleophile, while elimination removes a leaving group and a proton to form a double bond.",
    },
    {
      question: "What is the product when 1-bromo-2-methylpropane reacts with water?",
      options: ["2-methylpropanol", "2-methylpropene", "Propane", "Propanol"],
      answer: "2-methylpropanol",
      reasoning:
        "Water replaces the bromine atom with a hydroxyl group, forming 2-methylpropanol.",
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
        "Zaitsev's rule states that the more substituted alkene is favored, while Hofmann's rule states that the less substituted alkene is favored under certain conditions.",
    },
    {
      question: "What is the product when 1-bromopropane reacts with sodium ethoxide?",
      options: ["Propane", "Ethoxypropane", "Propene", "Propanol"],
      answer: "Ethoxypropane",
      reasoning:
        "Sodium ethoxide replaces the bromine atom with an ethoxy group, forming ethoxypropane.",
    },
    {
      question: "What is the product when 2-bromopropane reacts with potassium tert-butoxide?",
      options: ["Propane", "Propene", "2-methylpropene", "Propanol"],
      answer: "Propene",
      reasoning:
        "Potassium tert-butoxide is a strong base and favors elimination, producing propene from 2-bromopropane.",
    },
  ],
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Function to start a quiz
function startQuiz(quizId) {
  currentQuiz = quizzes[quizId];
  currentQuestionIndex = 0;
  score = 0;

  // Show the quiz container
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("quiz-title").textContent = `Quiz ${quizId.slice(-1)}: ${
    quizId === "quiz1"
      ? "Nucleophilic Substitution"
      : quizId === "quiz2"
      ? "Haloalkane Elimination"
      : "Reaction Processes"
  }`;

  // Load the first question
  loadQuestion();
}

// Function to load a question
function loadQuestion() {
  const question = currentQuiz[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.question;
  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="option" value="${option}" id="option${index}"> <label for="option${index}">${option}</label>`;
    optionsList.appendChild(li);
  });

  // Hide the next button and show the submit button
  document.getElementById("next-button").classList.add("hidden");
  document.getElementById("submit-button").classList.remove("hidden");
  document.getElementById("feedback").textContent = "";
  document.getElementById("reasoning").textContent = "";
}

// Function to submit an answer
function submitAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  const question = currentQuiz[currentQuestionIndex];
  const feedback = document.getElementById("feedback");
  const reasoning = document.getElementById("reasoning");

  if (selectedOption.value === question.answer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `Incorrect. The correct answer is: ${question.answer}`;
    feedback.style.color = "red";
  }

  reasoning.textContent = `Reasoning: ${question.reasoning}`;

  // Show the next button and hide the submit button
  document.getElementById("submit-button").classList.add("hidden");
  document.getElementById("next-button").classList.remove("hidden");
}

// Function to load the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    // End of quiz
    alert(`Quiz over! Your score is ${score}/${currentQuiz.length}`);
    document.getElementById("quiz-container").classList.add("hidden");
  }
}
