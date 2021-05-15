var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/record", function(req, res, next) {
  console.log("rank");
});

router.get("/record/:name", function(req, res, next) {

});

router.post("/result", function(req, res, next) {

});

module.exports = router;
