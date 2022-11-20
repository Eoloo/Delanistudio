$(document).ready(() =>{

$(".Portfolio").hover(() => {
    $(".col-sm-12 col-md-6 col-lg-3").mouseEnter()
    alert("mouse here")
});
})

$(".images").click(function(){
    $("p").toggle();
  });

$('#form-group').click(() => {
    const nameValue = $('.name form-control').val();
    const emailValue = $('.email form-control').val();
    const textAreaValue = $("#Message comment").val();

    // Perform validation for input fields
    let message = 'Please provide email and/or name'
    if (nameValue == '' || emailValue == ''|| textAreaValue == '') message = 'Please provide email, some text here and/or name';
    else { alert("Congratulations, we have received your message")}

    // $('.Contactus').text(message);

    
    })

    // alert(message);

