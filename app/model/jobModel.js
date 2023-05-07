const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  job_title: {
    type: String,
    required: true,
  },
  job_description: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
