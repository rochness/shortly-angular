angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function () {
    Links.addLinks($scope.url)
    .then(function(){
      $location.path('/links');
    })
    .catch(function(error){
      console.log(error);
    });
  };
});
