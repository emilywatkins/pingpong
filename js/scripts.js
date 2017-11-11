var countArray = function(input1) {
  var array = [];
  for (var i = 1; i <= input1; i += 1) {
    array.push(i);
  }
  return array;
}; //add forEach loop that prints each array item into ul.

var printArray = function(numbers) {
  numbers.forEach(function(number) {
    var list = $("<li>" + number + "</li>");
    $(".output").append(list);
    console.log(list);
  });
};


$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var input1 = parseInt($("#input1").val());
    var numbers = countArray(input1);
    printArray(numbers);

    $(".output").show();

  });
});
