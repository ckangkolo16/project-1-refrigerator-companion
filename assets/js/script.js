$(document).ready(function () {
  // function keyCode(event) {
  //   const w = event.keyCode;
  //   if (w == 13) {
  //     console.log("you've hit enter");
  //   } else {
  //     return;
  //   }
  // }
  $("#searchBtn").click(function () {
    var ingredientSearched = $("#searchRecipe").val();

    // change v1 to v2 & add apiKey
    searchByName(ingredientSearched);
  });

  //populate the recipe area with recipe list
  function searchByName(searchValue) {
    var queryURL =
      "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=" +
      searchValue;
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      //clear out current Carousel
      $("#pictureCaro").empty();

      // var images = $("<img>").attr("src", mealPic).addClass("img-click");

      // $("images").text(JSON.stringify(response);
      //createElement div  with img for pictures
      for (var i = 0; i < response.meals.length; ++i) {
        var mealId = response.meals[i].idMeal;
        console.log(mealId);
        // images.attr("alt", mealName);
        var mealPic = response.meals[i].strMealThumb;
        var mealName = response.meals[i].strMeal;

        $("#pictureCaro").append(
          $("<div>")
            .addClass("media-content")
            .attr("id", "menu-card")
            .attr("style", "max-width: 7rem; margin-left: 23px")

            .append(
              $("<img src=" + mealPic + ">")
                .addClass("img-click")
                .attr("height", "50px")
                .attr("width", "50px")
            )
            .append($("<p>").html(mealName))
        );

        searchById(mealId);
      }
    });
  }
  // $(".img-click").on("click", function () {
  //   console.log("successful click");
  //   $(".img-click").on("click", function () {
  //     $("#recipe-box").empty();
  //     $("#recipe-box").removeClass("hide");

  //     var recipeInt = $("<p>").text(response.meals[0].strInstructions);

  //     $("#recipe-box").append(recipeInt);
  //   });
  // });
  function searchById(id) {
    $.ajax({
      type: "GET",
      url: `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${id}`,
      dataType: "json",
      success: function (response) {
        $(".img-click").on("click", function () {
          console.log("initial click");
          $("#recipe-box").empty();
          $("#recipe-box").removeClass("hide");

          var recipeInt = $("<p>").text(response.meals[0].strInstructions);

          $("#recipe-box").append(recipeInt);
        });
      },
    });
  }

  function showRecipeDetails() {
    //on img-click we display recipe box and append in recipe instructions
  }
});
// Generic function for displaying the movieInfo
// $(document).on("click", ".movie", displayMovieInfo);function displayMovieInfo() {
//   var movie = $(this).attr("data-name");
//   // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.
//   var queryURL =
//     "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (res) {
//     console.log("here is the movie data!");
//     $(".movie-view").html(
//       "<pre>" +
//         JSON.stringify(
//           res.Title + " was released in  " + res.Year,
//           null,
//           2
//         ) +
//         "</pre>"
//     );
//   });
// }
