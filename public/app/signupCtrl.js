myApp.controller("signupCtrl", function($scope, notifier, $location, UserService){
    $scope.signup = function(){
        UserService.createUser($scope.email,$scope.password);
        UserService.authUser($scope.email,$scope.password);
    };

});