(function() {

    var app = angular.module('githubViewer', []);

    var MainController = function($scope, $http) {

        var onUserComplete = function(responce) {
            $scope.user = responce.data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the user. Please check if you've spelled Username correctly.";
        };

        $http.get('https://api.github.com/users/dariusz75')
        .then(onUserComplete, onError);

        $scope.username = 'Angular';
        $scope.message = 'GitHub Viewer';

    };

    app.controller('MainController', MainController);

}());


