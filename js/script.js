(function() {

    var app = angular.module('githubViewer', []);

    var MainController = function($scope) {

        $scope.message = 'This message comes from Main Controller';

    };

    app.controller('MainController', MainController);

}());


