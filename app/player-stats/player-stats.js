'use strict';

angular
  .module('tracker.player-stats', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('player-stats', { url: '/player-stats', templateUrl: 'player-stats/player-stats.html', controller: 'PlayerStatsCtrl' })
  })
  .controller('PlayerStatsCtrl', [function () { }]);
