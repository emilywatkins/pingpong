countUp = function(number) {

}

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var input1 = $("#input1").val();
    var array = [];
    for (var i = 1; i <= input1; i += 1) {
      array.push(i);
      debugger;
    }


    console.log(array);

  })
})
