myApp.controller("signupCtrl", function($scope, notifier, $location){

    $scope.signup = function(){
        UserService.createUser($scope.email,$scope.password).then(function(){

            mvNotifier.notifysuccess('User account created!');
        });
    };

});