$(document).ready(function() {
  // search box/button functionality
  $("#search").keypress(function(event) { 

    if (event.keyCode === 13) { 
      event.preventDefault();
      $("#submitbtn").click();
    };
  });

  //Retrieve city value 
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
    $("#cityname").append($("<h2>").addClass("card-title").text(city));
    
  var apiKey = "&appid=5d604db65fd998007c9f84ed1979695a";
  var currentWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city  + apiKey;
    
  // Get and post data per city
  $.ajax({
    url: currentWeatherURL,
    method: "GET"
  })
  .then(function (response){
  console.log(response.name);
    function displayweather (){
      $("#cityname").append($("<h2>").addClass("card-title").text(response.name));
      $("#f-icon").append(weatherIcon);
      var cityName = $("<h2>").addClass("card-title").text(city);
      var weatherIcon = $("img").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"); 
      //var currentDate = $("<h3>").addClass("card-title").text(currentDate.toLocaleDateString("en-US"));
      var temp = $("<p>")
    
    };
  displayweather();
  });
  //var forecastURL = "http://api.openweathermap.org/data/2.5/forecasat?q=" + city  + apiKey;

  // $.ajax({
    //url: forecastURL,
    //method: "GET"
  //})
  }); 
});
