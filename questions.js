var quizStarter = $("#start");
var container = document.querySelector(".container");


var questionBox = "";
var finalArray = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
]

quizStarter.on("click", function() {
  if (quizStarter) {
      (questions.textcontent) 
  }
});


// get the elements on the screen (question and choices)
// add click event to the choices
// put logic inside click event function
var index = 0;
var q1 = finalArray[index];

var h = $("<h>");
h.text(q1.title);
//put within function (because it has to be run mutiple times)
var c1 = $("<button>");
c1.text(q1.choices[0]);
c1.attr("class", "btn btn-outline-success");
var c2 = $("<button>");
c2.text(q1.choices[1]);
c2.addClass("btn btn-outline-success");
var c3 = $("<button>");
c3.text(q1.choices[2]);
var c4 = $("<button>");
c4.text(q1.choices[3]);

c1.on("click", function(event){
    console.log(event.target.innerText)
    answer = event.target.innerText
    correctAnswer()
})
c2.on("click", function(event){
    console.log(event.target.innerText)
    answer = event.target.innerText 
    correctAnswer() 
})
c3.on("click", function(event){
    console.log(event.target.innerText)
    answer = event.target.innerText
    correctAnswer()
})
c4.on("click", function(event){
    console.log(event.target.innerText)
    answer = event.target.innerText
    correctAnswer()
})
//function is code that can be run on command
//put within function (because it has to be run mutiple times)

var questionbox = $("#questionbox");
questionbox.append(h);
questionbox.append("<br>");
questionbox.append(c1);
questionbox.append("<br>");
questionbox.append(c2);
questionbox.append("<br>");
questionbox.append(c3);
questionbox.append("<br>");
questionbox.append(c4);


var correctAnswer = function () {
    if (answer === q1.answer ) {
        index++
    }
    else {timer = timer-15

    }
}
var answer 
var timer = 75 
// 