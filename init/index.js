const mongoose = require("mongoose");
const initData = require("./data.js");
const List = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://surajpandey879122:C5rKml9Cou2YBMxf@cluster1.24elnsz.mongodb.net/?retryWrites=true&w=majority";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await List.deleteMany({});
  await List.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
