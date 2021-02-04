$(document).ready(function() {
  // search box/button functionality
  $("#search").keypress(function(event) { 

    if (event.keyCode === 13) { 
      event.preventDefault();
      $("#submitbtn").click();
    };
  });

  //Retrieve city input value 
  $("#submitbtn").click(function() {
    event.preventDefault();
    
      
    var city = $("#search").val();
    console.log(city);
    //add city to search history list and show max 10 li
    if ($("#history li").length != 10) {
      $("#history").prepend("<li class='collection-item'>"+ city +"</li>");
    }
    else {$("#history").prepend("<li>"+ city +"</li>");
      $("#history li:last-child").remove();}

    $("#search").val("");
    
  var apiKey = "&appid=5d604db65fd998007c9f84ed1979695a";
  var currentWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city  + apiKey;
    
  // Get Request - Openweathermap API
  $.ajax({
    url: currentWeatherURL,
    method: "GET"
  })
  .then(function (response){
  console.log(response.name);

    //Retrieve and display current weather 
    function displayweather (){
      //reset values after each submission
      $("crntwethertitle").empty();
      $(".cityname").empty();
      $(".c-icon").empty();
      $(".c-temp").empty();
      $(".c-date").empty();
      $(".c-humidity").empty();
      $(".c-wind").empty();
     
      $("crntwethertitle").prepend("<hr>");
      $(".cityname").append($("<h2>").addClass("card-title").text(response.name));
      $(".c-icon").append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"));
      var temper = parseInt(response.main.temp); //convert temp response into Int
      var temper = (Math.trunc(temper-273.15) * 9/5 +32).toString(); //display in °F
      $(".c-temp").append($("<p>").text(temper + "°F"));
      $(".c-date").append($("<p>").text(response.dt));
      $(".c-humidity").append($("<p>").text("humidity: " + response.main.humidity));
      $(".c-wind").append($("<p>").text("wind speed: " + response.wind.speed + "mph"));
    
    };
    displayweather();

    var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey

    $.ajax({
      url: forecastURL,
      method: "GET"
    })
    .then(function (forecastRES){
    console.log(forecastRES);
    
    function displayforecast(){
      $(".ftrweatherrow").empty();
      for(i=0; i<5; i++){

        $(".ftrweatherrow").append($("<div id='forecast"+ i +"' class='card small col-md-4 forecastcards'>"));
        $("#forecast" + i).append($("<p>").text(list[i].main.temp))
      };
    };
    displayforecast();
    });
    
  });

  });

});
