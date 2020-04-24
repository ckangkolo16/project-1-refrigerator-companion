function keyCode(event) {
  const w = event.keyCode;
  if (w == 13) {
    console.log("you've hit enter");
  } else {
    return;
  }
}
var recipeList = [];
//Working filtered recipe search
$("#searchBtn").click(function () {
  var ingredientSearched = $("#searchRecipe").val();
  console.log(ingredientSearched);
  console.log("You are searching for " + ingredientSearched + ".");
  var queryURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" +
    ingredientSearched;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log("respoonse: ", JSON.stringify(response));
    //clear out current Carousel
    $("#pictureCaro").empty();

    var images = $("<img>").attr("src", mealPic).appendTo("body");
    // $("movie-view").text(JSON.stringify(response);
    //createElement div  with img for pictures
    //for each in array place img into a
    for (var i = 0; i < response.meals.length; ++i) {
      var mealPic = response.meals[i].strMealThumb;
      var mealName = response.meals[i].strMeal;
      console.log(mealName);
      console.log(mealPic);
      $("#pictureCaro").append(
        $("<div>")
          .addClass("media-content")
          .attr("id", "menu-card")
          .attr("style", "max-width: 7rem; margin-left: 23px")

          .append(
            $("<img src=" + mealPic + ">")
              .attr("height", "50px")
              .attr("width", "50px")
          )
          .append($("<p>").html(mealName))
      );

      // $("#pictureCaro").attr(image);
    }

    // $('div').
  });
});
function renderChoices(meal) {
  $("#finddddd").empty();

  for (var i = 0; i <= 4; i++) {
    console.log(i);

    //layout Variables for pic and title.
    // var titleRecipe = moment().add(1 + i, 'days').format("MM/DD/YYY");
    // var meal picture = response.meals[i].weather[0].icon;
    // var mealPictureURL = "http://openweathermap.org/img/wn/" + cityIconForecastCode + "@2x.png";
    // var cityTemperatureForecast = Math.round(response.list[i].main.temp);
    // var cityHumidityForecast = response.list[i].main.humidity;
    //display current meals information
    function currentMealChoice(currentMealChosen) {}
    //   forEach()
    // response.meals
  }
}
//create function that stores first few meals into array
//display array
//response = meals[0]
// next day = moment().add(1 + i, 'days').format("MM/DD/YYY");
