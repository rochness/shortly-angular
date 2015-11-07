angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLinks($scope.url, function (response) {
      console.log('Link posted');
    }, function (err) {
      console.log('Error posting link', err);
    });
  };
});
