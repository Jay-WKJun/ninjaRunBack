var express = require("express");
var router = express.Router();

const { getAllRecords, saveRecord } = require("../controllers/home.controller");

router.get("/record", getAllRecords);

router.post("/record", saveRecord);

module.exports = router;
