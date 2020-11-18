const router = require("router").Router;
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
router.put("/api/workouts/:id");
//findbyid


//router.get
router.get("/api/workouts");

//router.get range and distant
router.get("/api/workouts/range")

//router.delete
router.delete("/api/workouts")


module.exports = router;
