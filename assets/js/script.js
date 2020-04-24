$(document).ready(function () {
  var recipeList = [];
  $("#searchBtn").on("click", function () {
    ///get value of what is in the input
    let recipe = $("#searchRecipe").val();
    //clear input box
    $("#searchRecipe").val("");
    //pass the variable into a function to run your ajax call and call that function
    
  });

function renderRecipes(recipe) {
    var APIID = "d04073fe"
    var APIKey = "fed5ca5263ce63fa1ad93a6a12d222f8";
    
    //Url to query database

    var queryUrl = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY} "
+ APIID; +
      APIKey;

    $.ajax({
      url: queryUrl,
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      console.log(response);
      
    });
  }
  $(".dropdown").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("is-active");
  })
})
