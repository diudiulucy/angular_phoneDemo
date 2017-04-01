'use strict';

// Declare app level module which depends on views, and components
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    // 'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices',

]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones',{
                templateUrl:'phone-list/phone-list.html',
                controller:'phoneListCtrl'
             }).
            when('/phones/:phoneId',{
                templateUrl:'phone-detail/phone-detail.html',
                controller:'phoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
}]);
