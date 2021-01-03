$(document).ready(function() {
  // search box/button functionality
  $("#search").keypress(function(event) { 

    if (event.keyCode === 13) { 
      event.preventDefault();
      $("#submitbtn").click(); 
    } 
  });

  //Retrieve city value 
  $("#submitbtn").on("click", function() {
    event.preventDefault();
    
      
      city = $("#search").val();
      $("#search").val("");
      console.log(city);
      //add city to search history list 
      $("#history").append("<li>").addClass("list-group-item").text(city);
  })  
});
