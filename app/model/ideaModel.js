const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ideaSchema = new Schema({
  idea_name: {
    type: String,
    required: true,
  },
  idea_desc: {
    type: String,
    required: true,
  },
  idea_img: {
    type: String,
    required: true,
    default: ``,
  },
  idea_url: {
    type: String,
    required: true,
  },
  filter_tags: {
    type: [String],
    required: true,
  },
  upvotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // this is yet to be developed
    },
  ],
  level: {
    type: Number,
    required: true,
  },
  exp_points: {
    type: Number,
    required: true,
  },
  tokens: {
    type: Number,
    required: true,
  },
});

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = Idea;
