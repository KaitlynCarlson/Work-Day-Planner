$(document).ready(function() {
  var now = momentInterval;

  var momentInterval = setInterval(function() {
    $("#Moment-Date").text(
      moment().format("YYYY MMMM DD") +
        " " +
        moment()
          .format("dddd")
          .substring(0, 3)
          .toUpperCase()
    );
    $("#Moment-Time").text(moment().format("A hh:mm:ss"));
  }, 100);

  function colorRows() {
    if (moment().hour() === 9) {
      $(".hourNine").css("background-color", "#38C788");
      $(
        " .hourTen, .hourEleven, .hourNoon, .hourThirteen, .hourFourteen, .hourFifteen, .hourSixteen, .hourSeventeen"
      ).css("background-color", "#3877c7");
    }
    if (moment().hour() === 10) {
      $(".hourNine").css("background-color", "#38BFC7");
      $(".hourTen").css("background-color", "#38C788");
      $(
        ".hourEleven, .hourNoon, .hourThirteen, .hourFourteen, .hourFifteen, .hourSixteen, .hourSeventeen"
      ).css("background-color", "#3877c7");
    }
    if (moment().hour() === 11) {
      $(".hourNine, .hourTen").css("background-color", "#38BFC7");
      $(".hourEleven").css("background-color", "#38C788");
      $(
        ".hourNoon, .hourThirteen, .hourFourteen , .hourFifteen, .hourSixteen, .hourSeventeen "
      ).css("background-color", "#3877c7");
    }
    if (moment().hour() === 12) {
      $(".hourNine, .hourTen , .hourEleven").css("background-color", "#38BFC7");
      $(".hourNoon").css("background-color", "#38C788");
      $(
        ".hourThirteen, .hourFourteen , .hourFifteen, .hourSixteen , .hourSeventeen"
      ).css("background-color", "#3877c7");
    }
    if (moment().hour() === 13) {
      $(".hourNine, .hourTen, .hourEleven, .hourNoon").css(
        "background-color",
        "#38BFC7"
      );
      $(".hourThirteen").css("background-color", "#38C788");
      $(".hourFourteen, .hourFifteen , .hourSixteen, .hourSeventeen").css(
        "background-color",
        "#3877c7"
      );
    }
    if (moment().hour() === 14) {
      $(".hourNine, .hourTen, .hourEleven, .hourNoon, .hourThirteen").css(
        "background-color",
        "#38BFc7"
      );
      $(".hourFourteen").css("background-color", "#38C788");
      $(".hourFifteen, .hourSixteen, .hourSeventeen").css(
        "background-color",
        "#3877c7"
      );
    }
    if (moment().hour() === 15) {
      $(
        ".hourNine, .hourTen, .hourEleven, .hourNoon, .hourThirteen, .hourFourteen"
      ).css("background-color", "#38BFc7");
      $(".hourFifteen").css("background-color", "#38C788");
      $(".hourSixteen, .hourSeventeen").css("background-color", "#3877c7");
    }
    if (moment().hour() === 16) {
      $(
        ".hourNine, .hourTen, .hourEleven, .hourNoon, .hourThirteen, .hourFourteen, .hourFifteen"
      ).css("background-color", "#38BFc7");
      $(".hourSixteen").css("background-color", "#38C788");
      $(".hourSeventeen").css("background-color", "#3877c7");
    }
    if (moment().hour() === 17) {
      $(
        ".hourNine, .hourTen, .hourEleven, .hourNoon, .hourThirteen, .hourFourteen, .hourFifteen, .hourSixteen"
      ).css("background-color", "#38BFc7");
      $(".hourSeventeen").css("background-color", "#38C788");
    } else if (moment().hour() > 17) {
      $(
        ".hourNine, .hourTen, .hourEleven, .hourNoon, .hourThirteen, .hourFourteen, .hourFifteen, .hourSixteen, .hourSeventeen"
      ).css("background-color", "#38BFc7");
    } else if (moment().hour() < 9) {
      $(
        ".hourNine, .hourTen, .hourEleven, .hourNoon, .hourThirteen, .hourFourteen, .hourFifteen, .hourSixteen, .hourSeventeen"
      ).css("background-color", "#3877c7");
    }
  }

  // var nineAMEvents = document.querySelector("#nineAMEventInput");
  var nineAMEvents = localStorage.getItem("nineAMEvents");
  document.querySelector("#nineAMEventInput").innerHTML = $(
    "#NineAMSaveButton"
  ).on("click", function setNineAMEvents() {
    localStorage.setItem(
      "nineAMEvents",
      JSON.stringify($("#nineAMEventInput").text())
    );
  });
  $("#nineAMEventInput").text(nineAMEvents);

  colorRows();
});
