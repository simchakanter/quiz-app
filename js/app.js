// Set up the Question object

function Question(name, options, answer) {
  this.name = name;
  this.options = options;
  this.answer = answer;
  this.validate = function(submission) {
    if (submission === this.answer) {
      return true;
    } else {
      return false;
    }
  };
}
// Create the data for the questions
var question1 = new Question(
  "The purpose of a report is to",
  [
    "Read it",
    "Impress your boss with pretty charts",
    "Take action to improve your business performance.",
    "Get it done on time."
  ],
  "Take action to improve your business performance."
);
var question2 = new Question(
  "If someone is sitting at their desk, that means:",
  [
    "They are productive.",
    "They are delivering value for this company.",
    "They are taking up space",
    "They are lazy"
  ],
  "They are taking up space"
);
var question3 = new Question(
  "Productivity is best measured by",
  [
    "Emails written after 9PM",
    "Hours spent in office",
    "Reports generated",
    "Value created"
  ],
  "Value created"
);

var question4 = new Question(
  "The best way to tell if an idea is good is by",
  [
    "Checking the person's job title",
    "Making sure it will make me look good",
    "Making sure that it won't get me in trouble",
    "Testing it out in a creative, low-risk way"
  ],
  "Testing it out in a creative, low-risk way"
);

// Add all the questions to an array

var quizQuestions = [question1, question2, question3, question4];
var questionNumber = 0;

$(document).ready(function() {
  $('#start').click(function() {
    $(this).hide();
    loadQuestion(0);
    $('#questions').show();
    $('#submit').click(function(event) {
      event.preventDefault();
      // var correctAnswer = quizQuestions[questionNumber].answer;
      var submittedAnswer = quizQuestions[questionNumber].options[$('input[name=response]:checked').val()];
      if (quizQuestions[questionNumber].validate(submittedAnswer) === true ) {
        console.log("Correct");
      } else {
        console.log("Nope");
      }
    });
  });
});

function loadQuestion(number) {
  $('#message').text(quizQuestions[number].name);
  for (var option in quizQuestions[number].options) {
    $("<input type='radio' name='response' value=" + option + ">" + quizQuestions[number].options[option] + "<br>").appendTo('#options-container');
  }
}

