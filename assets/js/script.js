$(document).ready(function () {
  $(".dropdown").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("is-active");
  });
});


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
    console.log(queryURL + " is keyword search results");
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      console.log(response);

      $("#pictureCaro").empty();
      for (var i = 0; i < response.meals.length; i++) {
        var mealId = response.meals[i].idMeal;
        console.log(mealId);
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

  function searchById(id) {
    $.ajax({
      type: "GET",
      url: `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${id}`,
      dataType: "json",
    }).then(function (response) {
      console.log(response);
      $(".img-click").on("click", function () {
        $("#instructionSteps").text(response.meals[0].strInstructions);
        $("#ingListOne").text(response.meals[0].strIngredient1);
        $("#ingListTwo").text(response.meals[0].strIngredient2);
        $("#ingListThree").text(response.meals[0].strIngredient3);
        $("#ingListFour").text(response.meals[0].strIngredient4);
        $("#ingListFive").text(response.meals[0].strIngredient5);
        $("#ingListSix").text(response.meals[0].strIngredient6);
        $("#ingListSeven").text(response.meals[0].strIngredient7);
        $("#ingListEight").text(response.meals[0].strIngredient8);
        $("#ingListNine").text(response.meals[0].strIngredient9);
        $("#ingListTen").text(response.meals[0].strIngredient10);
        $("#ingListEleven").text(response.meals[0].strIngredient11);
        $("#ingListTwelve").text(response.meals[0].strIngredient12);
        $("#ingListThirteen").text(response.meals[0].strIngredient13);
        $("#ingListFourteen").text(response.meals[0].strIngredient14);
        $("#ingListFifteen").text(response.meals[0].strIngredient15);
        $("#ingListSixteen").text(response.meals[0].strIngredient16);
        $("#ingListSeventeen").text(response.meals[0].strIngredient17);
        $("#ingListEighteen").text(response.meals[0].strIngredient18);
        $("#ingListNineteen").text(response.meals[0].strIngredient19);
        $("#ingListTwenty").text(response.meals[0].strIngredient20);
        $("#strMeasureOne").text(response.meal[0].strMeasure1);
        $("#strMeasureTwo").text(response.meal[0].strMeasure2);
        $("#strMeasureThree").text(response.meal[0].strMeasure3);
        $("#strMeasureFour").text(response.meal[0].strMeasure4);
        $("#strMeasureFive").text(response.meal[0].strMeasure5);
        $("#strMeasureSix").text(response.meal[0].strMeasure6);
        $("#strMeasureSeven").text(response.meal[0].strMeasure7);
        $("#strMeasureEight").text(response.meal[0].strMeasure8);
        $("#strMeasureNine").text(response.meal[0].strMeasure9);
        $("#strMeasureTen").text(response.meal[0].strMeasure10);
        $("#strMeasureEleven").text(response.meal[0].strMeasure11);
        $("#strMeasureTwelve").text(response.meal[0].strMeasure12);
        $("#strMeasureThirteen").text(response.meal[0].strMeasure13);
        $("#strMeasureFourteen").text(response.meal[0].strMeasure14);
        $("#strMeasureFifteen").text(response.meal[0].strMeasure15);
        $("#strMeasureSixteen").text(response.meal[0].strMeasure16);
        $("#strMeasureSeventeen").text(response.meal[0].strMeasure17);
        $("#strMeasureEighteen").text(response.meal[0].strMeasure18);
        $("#strMeasureNineteen").text(response.meal[0].strMeasure19);
        $("#strMeasureTwenty").text(response.meal[0].strMeasure20);
      })
    })
  }

});