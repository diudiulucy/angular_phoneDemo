var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('phoneListCtrl',['$scope','Phone',function ($scope,Phone) {
    // $http.get('phones/phones.json').success(function (data) {
    //     $scope.phones = data;
    // });
    $scope.phones = Phone.query();

    $scope.orderProp = 'age';
}]);

phonecatControllers.controller('phoneDetailCtrl',['$scope','$routeParams','Phone',function ($scope,$routeParams,Phone) {
    // $http.get('phones/'+$routeParams.phoneId +'.json').success(function (data) {
    //     $scope.phone = data;
    //     $scope.mainImageUrl = data.images[0];
    // });
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function (imgUrl) {
        $scope.mainImageUrl = imgUrl;
    }
}]);