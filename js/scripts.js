var countArray = function(input1) {
  var array = [];
  for (var i = 1; i <= input1; i += 1) {
    array.push(i);
  }
  return array;
};

var divisible = function(numbers) {
  return numbers.map(function(number) {
    if (number % 15 === 0) {
      return "ping pong";
    } else if (number % 5 === 0) {
      return "pong";
    } else if (number % 3 === 0) {
      return "ping";
    } else {
      return number;
    }
  })
};

var printArray = function(three) {
  three.forEach(function(number) {
    var list = $("<li>" + number + "</li>");
    $(".output").append(list);
  })
};


$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    $(".output").empty();

    var input1 = parseInt($("#input1").val());
    var numbers = countArray(input1);
    var three = divisible(numbers);
    printArray(three);

    $(".output").show();

  });
});
