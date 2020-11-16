const mongoose = require("mongoose");

mongoose.connection(process.env.MONGODB || "mongodb://localhost/fitnessTracker")