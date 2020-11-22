/*const router = require("router").Router();
const Tracker = require("../models/"); */



/*router.post
router.post("/api/workouts", (req, res) =>{
    Tracker.create({

    }).then(dbWorkout =>{
        res.json(dbWorkout);
    }) .catch(err =>{
        res.json(err);
    })
})
//router.put


 router.put("/api/workouts/:id", function (req, res) {
   Tracker.findByIdAndUpdate(
        req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true}
    ).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});



//router.get

router.get("/api/workouts", function(req,res){
    Tracker.find({})
    .then(function(dbWorkout){
        res.json(dbWorkout);
    })
    .catch(function(err){
        res.status(400).json(err);
    });
});

//router.get range and distant

router.get("/api/workouts/range", function (req, res) {
    Tracker.find({}).limit(10).then(data => res.json(data)
    ).catch(err => {
        res.status(400).json(err);
    });
});


//router.delete
//router.delete("/api/workouts")


module.exports = Tracker; */

const router = require("express").Router();
const db = require("../models/");

// Get previous workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Adding the new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//update workouts by id
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
// Get most recent 5 workouts
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ _id: -1 })
    .limit(5)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
      console.log(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
