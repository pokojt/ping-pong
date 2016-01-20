var pingPong = function (number) {
var range = [];


  return

  if (number % 3 === 0) {
    return "ping";
  }
  else if (number % 5 === 0) {
    return "pong";
  }
  else if (number % 15 === 0) {
    return "pingpong";
  }
}

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var year = $("input#number").val();
    var count = pingPong(number);


    $("#count").show();
    event.preventDefault();
  });
});
