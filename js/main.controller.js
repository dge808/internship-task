myApp.controller('MainController', ['$scope', 'navigation', 'specials', function($scope, navigation, specials){
    $scope.navigation = navigation;
    $scope.specials = specials;
}]);

