'use strict';

angular.module('tracker.version', [
  'tracker.version.interpolate-filter',
  'tracker.version.version-directive'
])

.value('version', '0.1');
