function log(message) {
  if (console) {
    console.log(message);
  }
}

$(document).ready(function() {
  var already = [];

  $("button").click(function() {
    if (already.length == 75) return;

    var number = null;

    while (number == null) {
      var random = Math.floor(Math.random() * 75) + 1;

      if (!(_.include(already, random))) {
        number = random;
      }
    }

    log(already);

    already.push(number);
    already.sort(function(a, b) {
      return a > b;
    });

    $("#count").text(number);
  });
});
