var readlineSync = require('readline-sync');
var score = 0;
var admin = {
  name: "Praveen Kumar",
  score: 0
}

var questions = [{
  no: 1,
  question: "What two things can you never eat for breakfast? ",
  answer: "Lunch and Dinner"
}, {
  no: 2,
  question: "What has a face and two hands but no arms or legs? ",
  answer: "clock"
}, {
  no: 3,
  question: "What tastes better than it smells? ",
  answer: "Tongue"
}, {
  no: 4,
  question: "What kind of room has no doors or windows? ",
  answer: "Mushroom"
}, {
  no: 5,
  question: "What is orange and sounds like a parrot? ",
  answer: "carrot"
}, {
  no: 6,
  question: "What do Alexander The Great and Winnie The Pooh have in common? ",
  answer: "middle name"
}, {
  no: 7,
  question: "What goes up and never comes down? ",
  answer: "Age"
}, {
  no: 8,
  question: "What word becomes shorter when you add two letters to it? ",
  answer: "short"
}, {
  no: 9,
  question: "What gets wetter the more it dries? ",
  answer: "towel"
}, {
  no: 10,
  question: "Which word in the dictionary is spelled incorrectly? ",
  answer: "incorrectly"
}
];

var userName = readlineSync.question("Lets see how well you know MS Dhoni. may i have your name? ");
console.log("Hi ! " + userName + " Lets Play!");

function play(question, answer, no) {
  console.log(" ");
  console.log("Let's see your " + no + " question ");
  var currentAnswer = readlineSync.question(question);

  if (currentAnswer.toLowerCase() === answer.toLowerCase()){
    score++;
    console.log("yeah you are right ");
  }
  else {
    console.log("opps you are wrong ");
  }
}

var userName = readlineSync.question("Lets play a fun Quiz. may i have your name? ");
console.log("Hi ! " + userName + " Lets Play!");

function play(question, answer, no) {
  console.log(" ");
  console.log("Let's see your " + no + " question ");
  var currentAnswer = readlineSync.question(question);

  if(currentAnswer.toLowerCase() === answer.toLowerCase()){
    score++;
    console.log("yeah you are right ");
  }
  else{
    console.log("opps you are wrong ");
  }
}

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer, questions[i].no);
}

console.log(" ");
console.log("Quiz is Over and your final score is " + score);

if (admin.score <= score) {
  console.log("Hurrayy! " + userName + " you are the best scorer! ");
  admin.score = score;
  admin.name = userName;
}
else {
  console.log(admin.name + " is the best scorer with score: " + admin.score);
}
