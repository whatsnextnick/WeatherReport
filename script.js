$(document).ready(function() {
  // search box/button functionality
  $("#search").keypress(function(event) { 

    if (event.keyCode === 13) { 
      event.preventDefault();
      $("#submitbtn").click(); 
    } 
  });

  //Retrieve city value 
  $("#submitbtn").click(function() {
    event.preventDefault();
    
      
    city = $("#search").val();
    console.log(city);
    //add city to search history list and show max 10 li
    if ($("#history li").length != 10) {
      $("#history").prepend("<li class='collection-item'>"+ city +"</li>");
    }
    else {$("#history").prepend("<li>"+ city +"</li>");
      $("#history li:last-child").remove();}

    //express api call 
    const express = require("express");

    const https = require("https");

    const app = express();

    app.get("/", function(req, res){
      var apiKey = "&appid=5d604db65fd998007c9f84ed1979695a";
      var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

      https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data) {
          const weatherData = JSON.parse(data)
          const temp = weatherData.main.temp

          console.log(temp)
        })
      })
    })







    app.listen(1000, function() {
      console.log("Server is running on port 3000");
    })


    var apiKey= "5d604db65fd998007c9f84ed1979695a2"

  })  
});
