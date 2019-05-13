$(document).ready(function () {

    //Logik for start view
    $("#startbutton").click(function () {
        $("#startview").hide();
        $("#firstview").show();
    });


    //Logik for firstview
    $('#firstviewbutton').click(function () {
        var text = $('#firstviewtext').val();

        if (text == "1234") {
            $("#firstview").hide();
            $('#secondview').show();
        }
    });


    //Logik for secondview
    $('#secondviewbutton').click(function () {
        $("#secondview").hide();
        $("#thirdview").show();
    });


    //Logik for thirdview
    var isClicked1 = false; 
    var isClicked2 = false; 
    var isClicked3 = false;

    $('#image1').click(function () {
        $('#image1').hide();
        $('#image1_done').show();
        isClicked1 = true;
        allIsChecked();
    });

    $('#image2').click(function () {
        $('#image2').hide();
        $('#image2_done').show();
        isClicked2 = true;
        allIsChecked();
    });

    $('#image3').click(function () {
        $('#image3').hide();
        $('#image3_done').show();
        isClicked3 = true;
        allIsChecked();
    });

    function allIsChecked() {
        if (isClicked1 && isClicked2 && isClicked3) {
            $('#thirdviewinput').show(); 
        }
    }
    
    
    $('#thirdviewbutton').click(function () {
        var text = $('#thirdviewtext').val();

        if (text == "1G2A3B") {
            $("#thirdview").hide();
            $('#fourthview').show();
        }
    });
});
