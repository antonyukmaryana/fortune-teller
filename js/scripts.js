$(document).ready(function() {
  $("#answer1").hide();
  $("#answer2").hide();
  $("#answer3").hide();

  $("form#fortune_teller").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=fortune_teller]:checked").each(function(){
    var person_check = $(this).val()
    $('#person').append(person_check + "<br>");
    });

    // if (fortune_tellerMode === "") {
        // $('#answer1').fadeIn();
      // }

    })
})
