$().ready(function(){
  $("form#destiny").submit(function(event){
    var answer1 = parseInt($("select#question1").val());
    var answer2 = parseInt($("select#question2").val());
    var answer3 = parseInt($("select#question3").val());
    var total = answer1 + answer2 + answer3

    if (total < 0) {
      result = "unhappy";
    } else if (total > = 0) {
      result = "moderate";
    } else (total > 10){
      result = "happy";
    }

    $("#destiny").empty().append(result);
    $("#result").show();

      event.preventDefault();
    });
  });
// $(document).ready(function(){
//   $("form#destiny").submit(function(event){
//     event.preventDefault();
//
//     $("#happy").show();
//     $("input:checkbox[name=happy]:checked").each(function(){
//       var happyMode = $(this).val();
//       $('#happy').append(happyMode + "<br>");
//     });
//     $("#moderate").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var moderateMode = $(this).val();
//       $('#moderate').append(moderateMode + "<br>");
//     });
//     $("#miserable").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var miserableMode = $(this).val();
//       $('#miserable').append(miserableMode + "<br>");
//     });
// $('#destiny').show();
//
//   });
// });
