$(document).ready(function () {
    var quizStarter = $("#start");
    var container = document.querySelector(".container");
    var questionBox = "";
    var finalArray = [
        {
            title: "What was the Philadelphia Eagles famous play in the 2017-2018 Superbowl?",
            choices: ["tomato special", "pitch pass", "hail mary", "philly special"],
            answer: "philly special"
        },
        {
            title: "Who was the starting quarterback in that Superbowl?",
            choices: ["Donovan McNabb", "Nick Foles", "Michael Vick", "Carson Wentz"],
            answer: "Nick Foles"
        },
        {
            title: "How many Superbowl wins do the Eagles have?",
            choices: ["3", "0", "5", "1"],
            answer: "1"
        },
        {
            title: "Eagles beat the Patriots in Superbowl 52, but who did the Eagles lose to in Superbowl 39?",
            choices: ["Patriots", "Giants", "Ravens", "Steelers"],
            answer: "Patriots"
        }
    ]



    $("button").on("click", function () {
        $("#button").addClass("hide");
        console.log("text")
        $("#show").removeClass("hide")
        var answer;
        var timer = 75
        var seconds = 75, $seconds = document.querySelector('#countdown');
        (function countdown() {
            $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
            if (seconds-- > 0) setTimeout(countdown, 1000)
        })();
    });
    // get the elements on the screen (question and choices)
    // add click event to the choices
    // put logic inside click event function
    var index = 0;
    // var index = 1;
    // var index = 2;
    // var index = 3;  
    var c1, c2, c3, c4, q1, h;

    function setQuestions(index){
        q1 = finalArray[index];
    
        h = $("<h>");
        h.text(q1.title);
        //put within function (because it has to be run mutiple times)
        c1 = $("<button>");
        c1.text(q1.choices[0]);
        c1.attr("class", "btn btn-outline-success");
        c2 = $("<button>");
        c2.text(q1.choices[1]);
        c2.addClass("btn btn-outline-success");
        c3 = $("<button>");
        c3.text(q1.choices[2]);
        c3.addClass("btn btn-outline-success");
        c4 = $("<button>");
        c4.text(q1.choices[3]);
        c4.addClass("btn btn-outline-success");
    }
    setQuestions(index);
    
    c1.on("click", function (event) {
        console.log(event.target.innerText)
        answer = event.target.innerText
        correctAnswer()
    })
    c2.on("click", function (event) {
        console.log(event.target.innerText)
        answer = event.target.innerText
        correctAnswer()
    })
    c3.on("click", function (event) {
        console.log(event.target.innerText)
        answer = event.target.innerText
        correctAnswer()
    })
    c4.on("click", function (event) {
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
        if (answer === q1.answer) {
            index++
            setQuestions(index)
        }
    }

    // var answer;
    // var timer = 75
    // var seconds = 75, $seconds = document.querySelector('#countdown');
    // (function countdown() {
    //     $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
    //     if (seconds-- > 0) setTimeout(countdown, 1000)
    // })();
})
