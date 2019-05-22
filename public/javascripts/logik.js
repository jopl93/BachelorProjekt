$(document).ready(function () {

    //Logic for start view
    $("#startbutton").click(function () {
        $("#startview").hide();
        $("#introviewA").show();
       // $('#sms_sound')[0].play();
        window.navigator.vibrate(1000);
    });

    //Logic for introViewA
    $('#introabutton').click(function () {
        $("#introviewA").hide();
        $("#introviewB").show();
    });

    //Logic for introViewB

    $('#introbbutton').click(function () {
        $('#introviewB').hide();
        $("#firstview").show();
        $('#sms_sound')[0].play();
        window.navigator.vibrate(1000);
    });

    //Logic for firstview
    $("#firstviewpic").click(function () {
        window.navigator.vibrate(1000);
        $("#firstviewinput").show();

    });
    $('#firstviewbutton').click(function () {
        var text = $('#firstviewtext').val();


        if (text == "1234") {
            $('#good_sound')[0].play();
            $("#firstview").hide();
            $('#secondview').show();
        } else {
            var errortext = $("<div>");

            errortext.text("Godt forsøg - prøv igen :) ").css("color", "green");

            $('#errordiv1').empty();
            $('#errordiv1').append(errortext);


        }
    });


    //Logic for secondview
    $('#secondviewbutton').click(function () {
        $("#secondview").hide();
        $("#thirdview").show();
        $('#page_turn')[0].play();
    });


    //Logic for thirdview
    var isClicked1 = false;
    var isClicked2 = false;
    var isClicked3 = false;

    $('#image1').click(function () {
        $('#image1').hide();
        $('#image1_done').show();
        $('#pen_sound')[0].play();
        isClicked1 = true;
        allIsChecked();
    });

    $('#image2').click(function () {
        $('#image2').hide();
        $('#image2_done').show();
        $('#pen_sound')[0].play();
        isClicked2 = true;
        allIsChecked();
    });

    $('#image3').click(function () {
        $('#image3').hide();
        $('#image3_done').show();
        $('#pen_sound')[0].play();
        isClicked3 = true;
        allIsChecked();
    });

    function allIsChecked() {
        if (isClicked1 && isClicked2 && isClicked3) {
            window.navigator.vibrate(1000);
            $('#thirdviewinput').show();
        }
    }
    $('#thirdviewbutton').click(function () {
        var text = $('#thirdviewtext').val();
        if (text == "1D2A3B") {
            $('#good_sound')[0].play();
            $("#thirdview").hide();
            $('#fourthview').show();
            //$('#page_turn')[0].play();
        } else {

            var errortext = $("<div>");

            errortext.text("Næsten rigtigt - prøv igen :) ").css("color", "green");

            $('#errordiv2').empty();
            $('#errordiv2').append(errortext);

        }
    });

    //Logic for fourthview
    $('#fourthviewpic').click(function () {

        window.navigator.vibrate(1000);
        $('#fourthviewinput').show();
    });
    $('#fourthviewbutton').click(function () {
        var number = $('#fourthviewtext').val();

        if (number == "250") {
            $("#fourthview").hide();
            $("#fifthview").show();
            $('#good_sound')[0].play();

        } else {
            var errortext = $("<div>");
            errortext.text("Godt forsøg - prøv igen :) ").css("color", "green");

            $('#errordiv3').empty();
            $('#errordiv3').append(errortext);

        }
    });

    $('#fifthview').click(function () {
        window.navigator.vibrate(1000);
        $('#fifthviewinput').show();
    });

    $('#fifthviewbutton').click(function () {
        var num = $('#fifthviewtext').val();
        if (num == "BD23") {
            $("#good_sound")[0].play();
            $("#fifthview").hide();
            $("#sixthview").show();
        } else {
            var errortext = $("<div>");
            errortext.text("Godt forsøg - prøv igen :) ").css("color", "green");

            $('#errordiv4').empty();
            $('#errordiv4').append(errortext);

        }
    });


});
