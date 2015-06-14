myApp.controller("signupCtrl", function($scope, notifier, $location, UserService){
    $scope.signup = function(){
        UserService.createUser($scope.email,$scope.password);
<<<<<<< HEAD
        UserService.authUser($scope.email,$scope.password);
=======
        $scope.showmodal = true;
>>>>>>> 66e67240e106587883ee78a9884dbabccae1e400
    };

});