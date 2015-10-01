'use strict';

describe('tracker.version module', function() {
  beforeEach(module('tracker.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
