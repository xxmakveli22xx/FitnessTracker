const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
   day: {
       type: Date,
       default:() => new Date()
   },
   exercise:[{
       type: {
           type: String,
           trim: true,
           required: "Enter in type of exercise. "
       },

       name:{
           type: String,
           trim: true,
           required: "What type of "
       },

       duration:{
           type: Number,
           required: "How long "
       },

       weight:{
           type: Number
       },

       reps:{
        type: Number
       },

       sets:{
        type: Number
       }

   }]


},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);
// adds a dynamically-created property to schema
TrackerSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


const Tracker = mongoose.model("fitnessTracker", TrackerSchema);

module.exports = Tracker;