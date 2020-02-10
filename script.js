$(document).ready(function () {
    $('img').hide();
    $('#add').click(function () {
        $('#addParagraph').addClass("red");
        console.log("test");
        $('.section1').addClass("setBackground");
        
    });
    $('#toggle').click(function(){
        $('img').toggle("swing");
    });
    $('#append').click(function(){
        $('#appendParagraph').append("<p>Soy un append text OWO</p>")
    });
});

// $("button").click(function () {
//     $("p").append("<b>Appended text</b>");
// });
