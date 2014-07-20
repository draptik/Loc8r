'use strict';

var mongoose = require('mongoose');
var Loc = mongoose.model('location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsCreate = function(req, res) {};
module.exports.locationsListByDistance = function(req, res) {};

module.exports.locationsReadOne = function(req, res) {
  if (req.params && req.params.locationid) {
    Loc.findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "location not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 404, err);
          return;
        }
        sendJSONresponse(res, 200, location);
      });
    } else {
      sendJSONresponse(res, 404, {
        "message": "No locationid in request"
      });
    }
};

module.exports.locationsUpdateOne = function(req, res) {};
module.exports.locationsDeleteOne = function(req, res) {};

module.exports.reviewsCreate = function(req, res) {};
module.exports.reviewsReadOne = function(req, res) {};
module.exports.reviewsUpdateOne = function(req, res) {};
module.exports.reviewsDeleteOne = function(req, res) {};
