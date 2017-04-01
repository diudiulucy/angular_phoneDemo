'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneDetail').
component('phoneDetail',{
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams','Phone',function ($routeParams,Phone) {
        // $http.get('phones/'+$routeParams.phoneId +'.json').success(function (data) {
        //     $scope.phone = data;
        //     $scope.mainImageUrl = data.images[0];
        // });
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imgUrl) {
            self.mainImageUrl = imgUrl;
        }
    }]
});
