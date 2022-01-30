var buttons = $(".btn");
var pattern = [];
var validate = [];
var level = 1;
var audioBlue = new Audio("sounds/blue.mp3");
var audioGreen = new Audio("sounds/green.mp3");
var audioRed = new Audio("sounds/red.mp3");
var audioYellow = new Audio("sounds/yellow.mp3");
var audioWrong = new Audio("sounds/wrong.mp3");

// If not currently in playing state, reset/start game on any key press
$(document).keydown(function() {
  if (!$("#level-title").hasClass("playing")) {
    $("#level-title").removeClass("game-over");
    $("#level-title").addClass("playing");
    $("#level-title").text("Level " + level);
    level++;
    simonsButtons(pattern);
  }
});

// Main game logic
$(".btn").click(function() {
  // Check clicked button was the next correct button in the series
  if (this === validate[0]) {
    // If so, remove it from the array and play corresponding sound
    validate.shift();
    playSound(this);
    // If array is empty, user successfully followed it, increase level and add another button
    if (validate.length === 0) {
      setTimeout(function() {
        $("#level-title").text("Level " + level);
        level++;
        simonsButtons(pattern);
      }, 1000);
    }
    // Otherwise set fail state and away keypress for restart
  } else if ($("#level-title").hasClass("playing")) {
    pattern = [];
    validate = [];
    level = 1;
    audioWrong.play();
    $("#level-title").addClass("game-over");
    $("#level-title").removeClass("playing");
    $("#level-title").text("Game Over :( Press Any Key to Restart!");
  }
});

// The following two mouse events animate the button as being pressed when clicking until release
$(".btn").mousedown(function() {
  $(this).addClass("pressed");
});

$(".btn").mouseup(function() {
  $(this).removeClass("pressed");
});

// Add next button to the pattern, and reset the validation array with the full series
function simonsButtons(pattern) {
  rng = Math.random() * 4;
  rng = Math.floor(rng);

  pattern.push(buttons[rng]);

  playSound(pattern[pattern.length - 1]);
  simonPress(pattern[pattern.length - 1]);

  validate = [...pattern];
}

// Show button as pressed for 300ms
function simonPress(element) {
  $(element).addClass("pressed");
  setTimeout(function() {
    $(element).removeClass("pressed");
  }, 300);
}

// Play sound corresponding to the color clicked
function playSound(element) {
  if ($(element).hasClass("blue")) {
    audioBlue.play();
  } else if ($(element).hasClass("green")) {
    audioGreen.play();
  } else if ($(element).hasClass("red")) {
    audioRed.play();
  } else if ($(element).hasClass("yellow")) {
    audioYellow.play();
  }
}
