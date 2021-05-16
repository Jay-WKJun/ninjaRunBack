const mongoose = require("mongoose");

const Record = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  score: {
    type: Number,
  }
})

module.exports = mongoose.model("Record", Record);
