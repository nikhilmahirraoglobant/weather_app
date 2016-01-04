'use strict';

angular.module('weatherAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myroute', {
        url: 'Y',
        templateUrl: '../Y/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });
