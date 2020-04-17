// javascript
require(["dojo/request"], function (request) {
  request("helloworld.txt").then(
    function (text) {
      console.log("The file's content is: " + text);
    },
    function (error) {
      console.log("An error occurred: " + error);
    }
  );
});
