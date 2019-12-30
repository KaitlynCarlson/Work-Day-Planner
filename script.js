$(document).ready(function() {
  // $("#Moment-Time").append(now);

  var interval = setInterval(function() {
    var now = moment();

    $("#Moment-Date").text(
      now.format("YYYY MMMM DD") +
        " " +
        now
          .format("dddd")
          .substring(0, 3)
          .toUpperCase()
    );
    $("#Moment-Time").text(now.format("A hh:mm:ss"));
  }, 100);

  console.log(moment().hour());
});
