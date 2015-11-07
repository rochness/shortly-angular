angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.getLinks = Links.getLinks;
  $scope.getLinks(function (response) {
    $scope.data.links = response.data;
  }, function (err) {
    console.log(err);
  });
});
