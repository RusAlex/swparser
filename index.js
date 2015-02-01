var inherits = require('inherits');
var request = require('request');
var EventEmitter = require('events').EventEmitter;
var $ = require('cheerio');
var parser = require('xml2json');
var _ = require('underscore');

Swparser = function(options) {
  options = options || {}
  this.request = options.request || request
}

exports = module.exports = Swparser;

inherits(Swparser, EventEmitter);

Swparser.prototype.parse = function(id) {
  EventEmitter.call(this);

  parseHtml = function(html) {
    var html = ($('.fully-padded .first .clearfix', html).html());
    var json = parser.toJson(html);
    result = {};
    json = JSON.parse(json).dl;
    _.each(json.dd, function(i, k) {
      result[json.dt[k]] = json.dd[k];
    });
    return result;
  }

  that = this;
  this.request('http://uk.soccerway.com/players/a/'+id, function(err, res, body) {
    var result = parseHtml(body);
    that.emit('success', result);
  });

}
