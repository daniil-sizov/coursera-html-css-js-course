(function () {
  angular.module('LunchChecker', [])
    .controller('CheckerController', CheckerController);

  CheckerController.$injector = ["$scope"];

  function CheckerController($scope) {
    $scope.message = "";
    $scope.list = "";
    $scope.input_error = "";

    $scope.checkList = function(llist) {
      var qty = llist.split(',').length;
      $scope.input_error = "no-error";
      if (llist === "") {
        $scope.message = "Please enter data first";
        $scope.input_error = "input-error";
      } else if (qty < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
