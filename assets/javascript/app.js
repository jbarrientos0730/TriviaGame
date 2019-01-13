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
    }):

    function triviaSumm(){
        
    }
}
