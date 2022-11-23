$(document).ready((event) => {


    $(".images").click(() => {
        $("p").toggle();
    });

    $("p").click(() => {
        $(".images").toggle();
    })

    $(".imgs").hover(() => {
        $("img").mouseEnter()
        alert("mouse here")
    })

    $('#button').click(() => {
        const nameValue = $('.name form-control').val();
        const emailValue = $('.email form-control').val();
        const textAreaValue = $(".required form-control").val();

        // Perform validation for input fields
        let message = 'Please provide email, some text here and/or name'
        if (nameValue == '' || emailValue == '' || textAreaValue == '') message = 'Please provide email, some text here and/or name';
        else { alert("Congratulations, we have received your message") }



    })

    event.preventDefault();

})