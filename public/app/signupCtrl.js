myApp.controller("signupCtrl", function($scope, notifier, $location, UserService){
    $scope.showmodal = false;
    $scope.signup = function(){
        UserService.createUser($scope.email,$scope.password);
        $scope.showmodal = true;
    };
    $scope.modal = function() {
        $scope.showmodal = true
    }


});