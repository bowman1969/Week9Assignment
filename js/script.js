console.log("script.js connected!");

// Select all question blocks
let questionBlocks = document.querySelectorAll(".question-block");

// Create an object to store the user's selected answers
let answers = {};

// Loop through each question block
questionBlocks.forEach(function(block, index) {
  let buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Remove selected class from all buttons in this question
      buttons.forEach(function(btn) {
        btn.classList.remove("selected");
      });

      // Add selected class to clicked button
      button.classList.add("selected");

      // Store the selected letter answer
      answers[index + 1] = button.dataset.answer;

      console.log(answers);
    });
  });
});

// Function to turn A/B/C/D into point values
function getPoints(answer) {
  if (answer === "A") {
    return 1;
  } else if (answer === "B") {
    return 2;
  } else if (answer === "C") {
    return 3;
  } else if (answer === "D") {
    return 4;
  }
}

// Function to calculate and display the result
function displayResult() {
  let totalQuestions = questionBlocks.length;
  let answeredQuestions = Object.keys(answers).length;

  // Check if all questions were answered
  if (answeredQuestions !== totalQuestions) {
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-text").textContent =
      "Please answer all questions before getting your result.";
    return;
  }

  let totalScore = 0;

  // Add up the score
  for (let question in answers) {
    totalScore += getPoints(answers[question]);
  }

  let resultText = "";

  // These ranges work for 5 questions
  if (totalScore >= 5 && totalScore <= 8) {
    resultText = "You are an Explorer!";
  } else if (totalScore >= 9 && totalScore <= 12) {
    resultText = "You are an Artist!";
  } else if (totalScore >= 13 && totalScore <= 16) {
    resultText = "You are a Leader!";
  } else if (totalScore >= 17 && totalScore <= 20) {
    resultText = "You are a Thinker!";
  }

  // Show the result container
  document.getElementById("result-container").style.display = "block";

  // Put the result in the paragraph
  document.getElementById("result-text").textContent = resultText;
}

// Select the results button
let resultsButton = document.getElementById("show-result");

// Add click event listener
resultsButton.addEventListener("click", displayResult);