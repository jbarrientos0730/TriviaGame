$(document).ready(function() {
    var time = 30;
    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    $(window).on("load", hide);

    $("#triviaStart").on("click", function() {
        $(this).hide();
        show();
        run();
    });

    $("#finish").on("click", function() {
        $("#triviaStart").hide();
        hide();
        triviaSumm();
        stop();
    });

    function triviaSumm(){
        var alldone = $('<h2>').html('All Done!');
        var canswers = $('<h4>').html('Correct answers: ' + correct);
        var ianswers = $('<h4>').html('Incorrect answers: ' + incorrect);
        var qunanswered = $('<h4>').html('Unanswered: ' + unanswered);
        var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
        newclass.append(alldone);
        newclass.append(canswers);
        newclass.append(ianswers);
        newclass.append(qunanswered);
        $(".summ").append(newclass);
    }

    function decrement() {
    time--;

    $("#timer").html(" " + time + " seconds");
    
    if (time > 1) {
        $("#timer").html(" " + time + " second");
        }
        else if (time === 0) {
            $('#triviaStart').hide();
            hide();
            triviaSumm();
            stop();
        }
   }

    function stop() {
        clearInterval(intervalId);
    }  

    function hide(){
        $(".questions").hide();
        $("#triviaStart").show();
        $("#finish").hide();
    }

    function show() {
        $(".questions").show();
        $("#triviaStart").hide();
        $("#finish").show();
    }

    $('input[type=radio]').on("change", function() {
        correct =  $('input[value=correct]:checked').length;
        incorrect = $('input[value=wrong]:checked').length;
        unanswered = (4-(correct + incorrect));
    });

});
