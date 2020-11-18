const router = require("express").Router();
const path = require("path");


router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.hmtl"))
})


router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.hmtl"))
})