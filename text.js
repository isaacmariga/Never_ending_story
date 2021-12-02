$('#submit').on('click', () => {
    let aut = $('#storyAuthor').val();
    let text = $('#storyText').val();


    $("h2#newAuthor").append(aut);
    $("p#newStory").html(text);


})