$(document).ready(function () {
    AOS.init();
    $("#content").hide();
    // $('#bukaUndangan').modal("show");
    // $('#waiting').hide();
    setTimeout(function () {
        $('#waiting').show();
    }, 3000);
    setTimeout(function () {
        $('#waiting').fadeOut(1000);
    }, 4000);
    setTimeout(function () {
        $('#bukaUndangan').fadeIn(2000);
    }, 4000);
    $("#event-page").hide();
    $("#maps-page").hide();
    $("#say-page").hide();
    $("#gallery-page").hide();
    $("#playButton").hide();

});

$("#bukaTombol").click(function () {
    $("#content").fadeIn(3000);
    $('#bukaUndangan').hide();
    var x = document.getElementById("playAudio");
    var y = document.getElementById("playButton");
    var z = document.getElementById("stopButton");
    x.play();
    y.style.display = "none";
    z.style.display = "block";
});

$("#home-button").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $("#home-page").fadeIn(1000);
    $("#event-page").hide();
    $("#maps-page").hide();
    $("#say-page").hide();
    $("#gallery-page").hide();
})

$("#event-button").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $("#home-page").hide();
    $("#event-page").fadeIn(1000);
    $("#maps-page").hide();
    $("#say-page").hide();
    $("#gallery-page").hide();
})

$("#maps-button").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $("#home-page").hide();
    $("#event-page").hide();
    $("#maps-page").fadeIn(1000);
    $("#say-page").hide();
    $("#gallery-page").hide();
})

$("#say-button").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $("#home-page").hide();
    $("#event-page").hide();
    $("#maps-page").hide();
    $("#say-page").fadeIn(1000);
    $("#gallery-page").hide();
})

$("#gallery-button").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $("#home-page").hide();
    $("#event-page").hide();
    $("#maps-page").hide();
    $("#say-page").hide();
    $("#gallery-page").fadeIn(1000);
})