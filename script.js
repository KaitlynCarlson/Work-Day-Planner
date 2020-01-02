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

  // Nine AM Events
  var nineAMEvents = localStorage.getItem("nineAMEvents");
  document.querySelector("#nineAMEventInput").innerHTML = $(
    "#NineAMSaveButton"
  ).on("click", function setNineAMEvents() {
    localStorage.setItem(
      "nineAMEvents",
      JSON.stringify($("#nineAMEventInput").text())
    );
  });
  $("#nineAMEventInput").text(JSON.parse(nineAMEvents));
  // Ten AM Events

  var tenAMEvents = localStorage.getItem("tenAMEvents");
  document.querySelector("#tenAMEventInput").innerHTML = $(
    "#TenAMSaveButton"
  ).on("click", function setTenAMEvents() {
    localStorage.setItem(
      "tenAMEvents",
      JSON.stringify($("#tenAMEventInput").text())
    );
  });
  $("#tenAMEventInput").text(JSON.parse(tenAMEvents));

  // Eleven AM Events

  var elevenAMEvents = localStorage.getItem("elevenAMEvents");
  document.querySelector("#elevenAMEventInput").innerHTMLL = $(
    "#ElevenAMSaveButton"
  ).on("click", function setElevenAMEvents() {
    localStorage.setItem(
      "elevenAMEvents",
      JSON.stringify($("#elevenAMEventInput").text())
    );
  });
  $("#elevenAMEventInput").text(JSON.parse(elevenAMEvents));

  // Noon Events
  var noonEvents = localStorage.getItem("noonEvents");
  document.querySelector("#noonEventInput").innerHTML = $("#NoonSaveButton").on(
    "click",
    function setNoonEvents() {
      localStorage.setItem(
        "noonEvents",
        JSON.stringify($("#noonEventInput").text())
      );
    }
  );
  $("#noonEventInput").text(JSON.parse(noonEvents));

  // One PM Events

  var onePMEvents = localStorage.getItem("onePMEvents");

  document.querySelector("#onePMEventInput").innerHTML = $(
    "#OnePMSaveButton"
  ).on("click", function setOnePMEvents() {
    localStorage.setItem(
      "onePMEvents",
      JSON.stringify($("#onePMEventInput").text())
    );
  });
  $("#onePMEventInput").text(JSON.parse(onePMEvents));

  // Two PM Events

  var twoPMEvents = localStorage.getItem("twoPMEvents");

  document.querySelector("#twoPMEventInput").innerHTML = $(
    "#TwoPMSaveButton"
  ).on("click", function setTwoPMEvents() {
    localStorage.setItem(
      "twoPMEvents",
      JSON.stringify($("#twoPMEventInput").text())
    );
  });
  $("#twoPMEventInput").text(JSON.parse(twoPMEvents));

  // Three PM Events
  var threePMEvents = localStorage.getItem("threePMEvents");

  document.querySelector("#threePMEventInput").innerHTML = $(
    "#ThreePMSaveButton"
  ).on("click", function setThreePMEvents() {
    localStorage.setItem(
      "threePMEvents",
      JSON.stringify($("#threePMEventInput").text())
    );
  });
  $("#threePMEventInput").text(JSON.parse(threePMEvents));

  //Four PM Events

  var fourPMEvents = localStorage.getItem("fourPMEvents");
  document.querySelector("#fourPMEventInput").innerHTML = $(
    "#FourPMSaveButton"
  ).on("click", function setFourPMEvents() {
    localStorage.setItem(
      "fourPMEvents",
      JSON.stringify($("#fourPMEventInput").text())
    );
  });
  $("#fourPMEventInput").text(JSON.parse(fourPMEvents));

  // Five PM Events
  var fivePMEvents = localStorage.getItem("fivePMEvents");

  document.querySelector("#fivePMEventInput").innerHTML = $(
    "#FivePMSaveButton"
  ).on("click", function setFivePMEvents() {
    localStorage.setItem(
      "fivePMEvents",
      JSON.stringify($("#fivePMEventInput").text())
    );
  });
  $("#fivePMEventInput").text(JSON.parse(fivePMEvents));

  colorRows();
});
