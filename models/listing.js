const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  country: String,
  title:String,
  img: String,
  description: String,
});

const List = mongoose.model("List", listingSchema);
module.exports = List;


