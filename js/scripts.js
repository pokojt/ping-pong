var pingPong = function(inputNumber) {

  var rangeCount = [];

  for (var i = 1; i <= inputNumber; i++) {

    if ((i % 5 === 0) && (i % 3 === 0)){
      rangeCount.push("pingpong");
    }
    else if (i % 3 === 0) {
      rangeCount.push("ping");
    }
    else if (i % 5 === 0) {
      rangeCount.push("pong");
    }
    else {
      rangeCount.push(i);
    }
  };
  return rangeCount;
};




// $(document).ready(function() {
//   $("form#ping-pong").submit(function(event) {
//     var number = $("input#number").val();
//     var result = pingPong(number);
//
//     $(".number").text(number);
//     $("#result").show();
//
//     event.preventDefault();
//   });
// });
