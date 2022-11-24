$(document).ready(() => {


    $(".images").click(() => {
        $("p").toggle();
    });

    $("p").click(() => {
        $(".images").toggle();
    })

    $(".hover").hover(() => {
        $('.hover').css('opacity', '1');
    }, () => {
        $('.hover').css('opacity', '0');

    });
    $(".hover1").hover(() => {
        $('.hover1').css('opacity', '1');
    }, () => {
        $('.hover1').css('opacity', '0');

    });

    $(".hover2").hover(() => {
        $('.hover2').css('opacity', '1');
    }, () => {
        $('.hover2').css('opacity', '0');

    });

    $(".hover3").hover(() => {
        $('.hover3').css('opacity', '1');
    }, () => {
        $('.hover3').css('opacity', '0');

    });

    $(".hover4").hover(() => {
        $('.hover4').css('opacity', '1');
    }, () => {
        $('.hover4').css('opacity', '0');

    });

    $(".hover5").hover(() => {
        $('.hover5').css('opacity', '1');
    }, () => {
        $('.hover5').css('opacity', '0');

    });

    $(".hover6").hover(() => {
        $('.hover6').css('opacity', '1');
    }, () => {
        $('.hover6').css('opacity', '0');

    });

    $(".hover7").hover(() => {
        $('.hover7').css('opacity', '1');
    }, () => {
        $('.hover7').css('opacity', '0');

    });


    $('#submit').click(() => {
        let nameValue = $('#name').val();
        let emailValue = $('#email').val();
        let textAreaValue = $('#text').val();

 
        if (nameValue == '' || emailValue == '' || textAreaValue == '') {
            alert("Please input all the information")
        }

        else { alert("Congratulations, we have received your message") }

    })

})