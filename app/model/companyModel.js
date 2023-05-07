const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  company_name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  funding: {
    type: String,
    required: true,
  },
  openings: {
    type: Number,
    required: true,
  },
  missions: {
    type: Number,
    required: true,
  },
  no_of_employees: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
    default: [],
  },
  featured: {
    type: Boolean,
    required: true,
    default: false,
  },
  company_about: {
    type: String,
    required: true,
  },
  company_description: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
