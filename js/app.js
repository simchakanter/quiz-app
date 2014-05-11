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
var score = 0;

$(document).ready(function() {
  $('#start').click(function() {
    $(this).hide();
    loadQuestion(0);
    $('#questions').show();
    $('#submit').click(function(event) {
      event.preventDefault();
      var submittedAnswer = quizQuestions[questionNumber].options[$('input[name=response]:checked').val()];
      if (quizQuestions[questionNumber].validate(submittedAnswer) === true ) {
        console.log("Correct");
        score++;
        console.log(score);
      } else if ($('input[name=response]:checked').val() === undefined ){
        console.log("No answer provided");
        return;
      } else {
        console.log("Nope");
      }
      if (questionNumber < quizQuestions.length - 1) {
        questionNumber++;
        loadQuestion(questionNumber);
      } else {
        $("#questions").hide();
        $("#message").text("Done! Your score is " + score + " out of " + quizQuestions.length);
        $("#restart").show();
        console.log("The quiz is done. Your score is " + score);
        questionNumber = 0;
        score = 0;
        $('#restart').click(function() {
          location.reload();
        });
      }
      console.log("questionNumber is " + questionNumber);
    });
  });
});

function loadQuestion(number) {
  $('#message').text(quizQuestions[number].name);
  $('#options-container').empty();
  for (var option in quizQuestions[number].options) {
    $("<input type='radio' name='response' value=" + option + ">" + quizQuestions[number].options[option] + "<br>").appendTo('#options-container');
  }
  $('#count').text(number + 1);
}

