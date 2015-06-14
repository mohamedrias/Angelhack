myApp.controller('signinCtrl', function($scope, $location, UserService){
    $scope.username = 'Angel Hacker';
    $scope.loggedin = false;
    $scope.signin = function() {
        UserService.authUser($scope.email, $scope.password);
        $scope.loggedin = true;
    }
});