const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experienceTrackerSchema = new Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  role: {
    type: String,
    required: true,
  },
  years_of_experience: {
    type: String,
    required: true,
  },
});

const ExperienceTracker = mongoose.model(
  "ExperienceTracker",
  experienceTrackerSchema
);

module.exports = ExperienceTracker;
