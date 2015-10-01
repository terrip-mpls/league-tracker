'use strict';

// Declare app level module which depends on views, and components
angular.module('tracker', [
  'ngRoute',
  'tracker.view1',
  'tracker.view2',
  'tracker.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
