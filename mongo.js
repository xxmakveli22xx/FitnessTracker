const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({



});


const Tracker = mongoose.model("fitnessTracker", TrackerSchema);

module.exports = Tracker;