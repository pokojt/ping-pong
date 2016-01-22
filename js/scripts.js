var pingPong = function(inputNumber) {

  var rangeCount = [];

  if ((isNaN(inputNumber)) || (inputNumber === "") || (inputNumber <= 0)) {
    rangeCount.push("Please only enter a positive number!");
  }
  else {

    // var rangeCount = [];

    for (var i = 1; i <= inputNumber; i++) {

      if (i % 15 === 0) {
        rangeCount.push("ping pong");
      }
      else if (i % 5 === 0) {
        rangeCount.push("pong");
      }
      else if (i % 3 === 0) {
        rangeCount.push("ping");
      }
      else {
        rangeCount.push(i);
      }
    };
    return rangeCount;
  };
  return rangeCount;
};


$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $("ul").empty();
    var inputNumber = $("input#inputNumber").val();
    var result = pingPong(inputNumber);

    for (i = 0; i < result.length; i ++) {

    $("#result").append("<li>" + result[i] + "</li>");
    };

    $("#modal").modal('show');

    event.preventDefault();
  });
});
