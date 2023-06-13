var myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
  "$scope",
  function ($scope) {
    $scope.removeNinja = function (ninja) {
      var removedNinja =
        $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = function () {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        available: true,
        thumb: "content/images/new.png",
      });

      $scope.newninja.name = "";
      $scope.newninja.belt = "";
      $scope.newninja.rate = "";
    };

    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "Green",
        rate: 50,
        available: true,
        thumb: "content/images/Green.png",
      },
      {
        name: "Crystal",
        belt: "Yellow",
        rate: 30,
        available: true,
        thumb: "content/images/Yellow.png",
      },
      {
        name: "Ryu",
        belt: "Orange",
        rate: 10,
        available: true,
        thumb: "content/images/Orange.png",
      },
      {
        name: "Shaun",
        belt: "Black",
        rate: 1000,
        available: true,
        thumb: "content/images/Black.png",
      },
    ];
  },
]);
