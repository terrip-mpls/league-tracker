'use strict';

// Declare app level module which depends on views, and components
var trackerApp = angular.module('tracker', [
  'ui.router',
  'ui.bootstrap',
  'tracker.standings',
  'tracker.player-stats',
  'tracker.version'
]);

trackerApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/standings');

});
