console.log("script.js connected!");

// Find all question blocks and define them as "questionBlocks"
let questionBlocks = document.querySelectorAll(".question-block");

// Create a container for the answers to live in
let answers = {};

//Loop through each question block
questionBlocks.forEach(function(block, index) {
  let buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      
      // remove selected class from all buttons in this question only
      buttons.forEach(function(btn) {
        btn.classList.remove("selected");
      });

      // add selected class to the button that was clicked
      button.classList.add("selected");

      // store the selected answer
      answers[index + 1] = button.dataset.answer;

      console.log(answers);
    });
  });
});