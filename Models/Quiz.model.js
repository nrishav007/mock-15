const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
});
const quizUserModel = mongoose.model("masaiquiz", UserSchema);
module.exports = quizUserModel;
