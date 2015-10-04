'use strict';

angular
  .module('tracker.standings', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('standings', { url: '/standings', templateUrl: 'standings/standings.html', controller: 'StandingsCtrl' })
  })
  .controller('StandingsCtrl', [function() {}]);