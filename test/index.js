var parser = require('..');
var assert = require('assert');
var fixtures = require('./fixtures.js');

describe('First test', function() {

  it('Should return JSON', function(done) {
    request = function(url, callback) {
      callback(null, null, fixtures.first);
    }
    var p = new parser({
      request: request
    });

    p.on('success', function(result) {
      assert.equal('Petr', result["First name"])
      done();
    });

    p.parse(1);
  });

});
