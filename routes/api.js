const router = require("router").Router();
const Tracker = require("../models/mongo.js");

//router.post
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


module.exports = Tracker;
