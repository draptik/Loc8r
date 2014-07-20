'use strict';

var mongoose = require('mongoose');
var Loc = mongoose.model('location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsCreate = function(req, res) {};
module.exports.locationsListByDistance = function(req, res) {};

/*
  GET /api/locations/:locationid
*/
module.exports.locationsReadOne = function(req, res) {
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
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

/*
  GET /api/locations/:locationid/reviews/:reviewid
*/
module.exports.reviewsReadOne = function(req, res) {
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .select('name reviews') /* only return location.name and location.reviews */
      .exec(function(err, location) {
        var response, review;
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "location not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 404, err);
          return;
        }
        if (location.reviews && location.reviews.length > 0) {
          console.log('reviews: ' + location.reviews);
          review = location.reviews.id(req.params.reviewid);
          if (!review) {
            sendJSONresponse(res, 404, {
              "message": "reviewid not found"
            });
          } else {
            response = {
              location: {
                name: location.name,
                id: req.params.locationid
              },
              review: review
            };
            sendJSONresponse(res, 200, location);
          }
        } else {
          sendJSONresponse(res, 404, {
            "message": "No reviews found"
          });
        }
      });
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
  }
};

module.exports.reviewsUpdateOne = function(req, res) {};
module.exports.reviewsDeleteOne = function(req, res) {};
