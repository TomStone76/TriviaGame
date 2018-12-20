$(document).ready(function () {

    var number = 31;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;

    $("#questions").hide();
    $("#timer").hide();
    $("#game-over").hide();

    $("#start-button").click(function () {

        $("#timer").show();
        $("#questions").show();
        $("#description, #start-button").remove();

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {
            var unanswered = 5 - (correctAnswers + incorrectAnswers);
            number--;
            $("#timer").html("<p>" + number + " second(s) left" + "</p>" + "<br/>");
            if (number === 0 || (correctAnswers + incorrectAnswers) === 5) {
                stop();
                $("#questions").hide();
                $("#timer").hide();
                $("#game-over").show();
                var end =
                    "<h1>All Done!</h1>" +
                    "<br>" +
                    "<p>Correct Answers: " + correctAnswers + "</p>" +
                    "<p>Incorrect Answers: " + incorrectAnswers + "</p>" +
                    "<p>Unanswered Questions: " + unanswered + "</p>";
                $("#game-over").html(end);
            }
        }

        function createQuestions() {

            var groupOne =
                "<form class='one'>" +
                "<p>Norway is the northernmost country in Europe.</p>" +
                "<div class='radio-one'>" +
                "<input type='radio' id='trueOne' name='radAnswer'>True" +
                "<input type='radio' id='falseOne' name='radAnswer'>False" +
                "</div>" +
                "</form>" +
                "<br>";
            $("#questions").append(groupOne);

            $(".one").click(function () {
                var valOne = $("#trueOne").is(":checked");
                var valTwo = $("#falseOne").is(":checked");
                if (valOne) {
                    alert("Correct!");
                    correctAnswers++;
                } else if (valTwo) {
                    alert("Sorry, that's incorrect!");
                    incorrectAnswers++;
                }
            });

            var groupTwo =
                "<form class='two'>" +
                "<p>Kenya is the largest country in Africa by area.</p>" +
                "<div class='radio-two'>" +
                "<input type='radio' id='trueTwo' name='radAnswer'>True" +
                "<input type='radio' id='falseTwo' name='radAnswer'>False" +
                "</div>" +
                "</form>" +
                "<br>";
            $("#questions").append(groupTwo);

            $(".two").click(function () {
                var valThree = $("#trueTwo").is(":checked");
                var valFour = $("#falseTwo").is(":checked");
                if (valThree) {
                    alert("Sorry, that's incorrect!");
                    incorrectAnswers++;
                } else if (valFour) {
                    alert("Correct!");
                    correctAnswers++;
                }
            });

            var groupThree =
                "<form class='three'>" +
                "<p>Brazil is the only Portuguese-speaking country in South America.</p>" +
                "<div class='radio-three'>" +
                "<input type='radio' id='trueThree' name='radAnswer'>True" +
                "<input type='radio' id='falseThree' name='radAnswer'>False" +
                "</div>" +
                "</form>" +
                "<br>";
            $("#questions").append(groupThree);

            $(".three").click(function () {
                var valFive = $("#trueThree").is(":checked");
                var valSix = $("#falseThree").is(":checked");
                if (valFive) {
                    alert("Correct!");
                    correctAnswers++;
                } else if (valSix) {
                    alert("Sorry, that's incorrect!");
                    incorrectAnswers++;
                }
            });

            var groupFour =
                "<form class='four'>" +
                "<p>Utah, Colorado, Arizona, and New Mexico are the only four states that meet at one point.</p>" +
                "<div class='radio-four'>" +
                "<input type='radio' id='trueFour' name='radAnswer'>True" +
                "<input type='radio' id='falseFour' name='radAnswer'>False" +
                "</div>" +
                "</form>" +
                "<br>";
            $("#questions").append(groupFour);

            $(".four").click(function () {
                var valSeven = $("#trueFour").is(":checked");
                var valEight = $("#falseFour").is(":checked");
                if (valSeven) {
                    alert("Correct!");
                    correctAnswers++;
                } else if (valEight) {
                    alert("Sorry, that's incorrect!");
                    incorrectAnswers++;
                }
            });

            var groupFive =
                "<form class='five'>" +
                "<p>The Ganges River runs through India and no other countries.</p>" +
                "<div class='radio-five'>" +
                "<input type='radio' id='trueFive' name='radAnswer'>True" +
                "<input type='radio' id='falseFive' name='radAnswer'>False" +
                "</div>" +
                "</form>" +
                "<br>";
            $("#questions").append(groupFive);

            $(".five").click(function () {
                var valNine = $("#trueFive").is(":checked");
                var valTen = $("#falseFive").is(":checked");
                if (valNine) {
                    alert("Sorry, that's not correct!");
                    incorrectAnswers++;
                } else if (valTen) {
                    alert("Correct!");
                    correctAnswers++;
                }
            });

        }

        function stop() {
            clearInterval(intervalId);
        }

        decrement();
        createQuestions();
        run();

    });
});