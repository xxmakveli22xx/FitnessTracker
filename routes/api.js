/*const router = require("router").Router();
const Tracker = require("../models/mongo.js"); */

const db = require("../models");
require("mongoose");


module.exports = (app) => {
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).then(data => res.json(data))
            .catch(err => {
                res.status(400).json(err);
            });
    });


}


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
