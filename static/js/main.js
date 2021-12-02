$("#harry").click(function() {
    $("#adventure").hide();
    $("#hpstory").show();
})

$("#adv").click(function() {
    $("#adventure").hide();
    $("#advstory").show();
})



$(".genre_button").click(function() {
    $(".stories").hide();
    $("#advstory").hide();
    $("#adventure").show();
})



$("#switch0_4").click(function() {
    $("#story0_5").hide();
    $(".story_piece").show();
    $("#story1").show();

})



$("#switch1_1").click(function() {
    $("#story1_2").hide();
    $("#story1_3").hide();
    $("#story1_4").hide();
    $("#story1_5").hide();
    $("#story2").show();

})
$("#switch2_4").click(function() {
    $("#story2_5").hide();
    $("#story3").show();
})

$("#switch3_3").click(function() {
    $("#story3_4").hide();
    $("#story_new").show();
})

$('#submit').on('click', () => {
    let aut = $('#storyAuthor').val();
    let text = $('#storyText').val();

    $("#story_new").hide();




    $("h2#newAuthor ").append(aut);
    $("p#newStory ").html(text);


})





$("#btn1").click(function() {
    $(".adventure").css("background-image", "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(/static/images/cederic-vandenberghe-21DP3hytVHw-unsplash.jpg)")
    $(".adventure").css("color", "black")
    $(".interest_section").hide();
    $(".adventure_container").hide();
    $("#adventure_container").show();
})
$("#btn2").click(function() {
    $(".adventure").css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url(/static/images/mathew-macquarrie-u6OnpbMuZAs-unsplash.jpg)")
    $(".adventure").css("color", "white")
    $(".about").hide();
    $(".adventure_container").hide();
    $("#adventure_container2").show();
})
$("#btn3").click(function() {
    $(".adventure").css("background-image", "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(/static/images/lauza-loistl-pkFo3Lm-d0s-unsplash.jpg)")
    $(".adventure").css("color", "black")
    $(".adventure_container").hide();
    $("#adventure_container3").show();
})



$("#btn1").click(function() {
    $(".adventure_type").hide();
    $("#adventure_fantacy").show();
})

$("#login_button").click(function() {

    let loginName = $('#loginName').val();
    let loginPass = $('#loginPass').val();

    if (loginName === "Name" && loginPass == 1234) {
        $("#page_contents").show();
        $("#login_section").hide();
    } else {
        alert("Incorrect Password or login")

    }

    console.log(loginName)
    console.log(loginPass)

})