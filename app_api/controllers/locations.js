'use strict';

var mongoose = require('mongoose');
var Loc = mongoose.model('location');

var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsCreate = function (req, res) {};
module.exports.locationsListByDistance = function (req, res) {};
module.exports.locationsReadOne = function (req, res) {
  sendJSONresponse(res, 200, {"status": "success"});
};
module.exports.locationsUpdateOne = function (req, res) {};
module.exports.locationsDeleteOne = function (req, res) {};

module.exports.reviewsCreate = function (req, res) {};
module.exports.reviewsReadOne = function (req, res) {};
module.exports.reviewsUpdateOne = function (req, res) {};
module.exports.reviewsDeleteOne = function (req, res) {};
