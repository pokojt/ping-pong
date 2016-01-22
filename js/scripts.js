var pingPong = function(inputNumber) {

  var rangeCount = [];

  for (var i = 1; i <= inputNumber; i++) {
    rangeCount.push(i);
  };
  return rangeCount;
};


//   return
//
//   if (number % 3 === 0) {
//     return "ping";
//   }
//   else if (number % 5 === 0) {
//     return "pong";
//   }
//   else if (number % 15 === 0) {
//     return "pingpong";
//   }
//   else {
//     return "Please enter integers only!"
//   }
// }

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
