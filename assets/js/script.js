var recipeList = [];
//Working filtered recipe search
$("#searchBtn").click(function () {
  console.log("You Clicked search");
  var recipeSearched = $("#searchRecipe").val();
  console.log(recipeSearched);
  var queryURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + recipeSearched;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});
