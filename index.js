$(document).ready(() =>{

$("#hover").click(() => {
    alert("mouse here")
});
})

$('.Contactus').click(() => {
    const nameValue = $('.required form-control').val();
    const emailValue = $('.required form-control').val();
    const textAreaValue = $("#Message comment").val();

    // Perform validation for input fields
    let message = 'Please provide email and/or name'
    if (nameValue == '' || emailValue == '' || textAreaValue =="") message = 'Please provide email and/or name';
    else { alert("Congratulations, we have received your message")}

    })

    // alert(message);

