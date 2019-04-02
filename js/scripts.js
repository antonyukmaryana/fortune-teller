$(document).ready(function() {
  $("#answer1").hide();
  $("#answer2").hide();
  $("#answer3").hide();

  $("form#fortune_teller").submit(function(event){
    event.preventDefault();
    var userResponses = [];
    $("input:checkbox[name='person']:checked").each(function(){
    var person_info = $(this).val();
    userResponses.push(person_info);
    });
    $("input:checkbox[name='age']:checked").each(function(){
    var age_info = $(this).val();
    userResponses.push(age_info);
    });
    $("input:checkbox[name='marital_status']:checked").each(function(){
    var maritalStatus_info = $(this).val();
    userResponses.push(maritalStatus_info);
    });
    $("input:checkbox[name='children']:checked").each(function(){
    var children_info = $(this).val();
    userResponses.push(children_info);
    });
    $("input:checkbox[name='parapsychology']:checked").each(function(){
    var parapsychology_info = $(this).val();
    userResponses.push(parapsychology_info);
    });
    $("input:checkbox[name='money']:checked").each(function(){
    var money_info = $(this).val();
    userResponses.push(money_info);
    });
console.log(userResponses)
});

});
