$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    var personInput = $("input#person").val();
    var favfoodInput = $("input#favfood").val();
    var favmusicInput = $("input#favmusic").val();

    $(".person").text(personInput);
    $(".favfood").text(favfoodInput);
    $(".favmusic").text(favmusicInput);

    $("#story").show();

    event.preventDefault();
  });
});
