// Set up the Question object

function Question(name, options) {
  this.name = name;
  this.options = options;
  var self = this;
  this.validate = function(submission) {
    return (self.options[submission][1]);
  };
}
// Create the data for the questions
var question1 = new Question(
  "The purpose of a report is to",
  [
    ["Read it", false],
    ["Impress your boss with pretty charts", false],
    ["Take action to improve your business performance.", true],
    ["Get it done on time.", false]
  ]
);
var question2 = new Question(
  "If someone is sitting at their desk, that means:",
  [
    ["They are productive.", false],
    ["They are delivering value for this company.", false],
    ["They are taking up space", true],
    ["They are lazy", false]
  ]
);
var question3 = new Question(
  "Productivity is best measured by",
  [
    ["Emails written after 9PM", false],
    ["Hours spent in office", false],
    ["Reports generated", false],
    ["Value created", true]
  ]
);

var question4 = new Question(
  "The best way to tell if an idea is good is by",
  [
    ["Checking the person's job title", false],
    ["Making sure it will make me look good", false],
    ["Making sure that it won't get me in trouble", false],
    ["Testing it out in a creative, low-risk way", true]
  ]
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
      var submittedAnswer = $('input[name=response]:checked').val();
      console.log(submittedAnswer);
      if ($('input[name=response]:checked').val() === undefined ){
        console.log("No answer provided");
        return;
      } else if (quizQuestions[questionNumber].validate(submittedAnswer) === true ) {
        console.log("Correct");
        score++;
        console.log(score);
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
    $("<input type='radio' name='response' id='" + option + "' value='" + option + "'><label for='" + option + "'>" + quizQuestions[number].options[option][0] + "</label><br>").appendTo('#options-container');
  }
  $('#count').text(number + 1);
}

