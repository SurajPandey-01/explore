const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const Listing = require("./models/info.js");
const initData = require("./init/data.js");
const List = require("./models/listing.js");
require('dotenv').config();
const dbUrl="mongodb+srv://surajpandey879122:X7l72pMkUJUpV3BL@cluster0.toc1glq.mongodb.net/?retryWrites=true&w=majority";
const MONGO_URL1 = "mongodb+srv://surajpandey879122:C5rKml9Cou2YBMxf@cluster1.24elnsz.mongodb.net/?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.render("Home.ejs");
});
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
}); 
app.post("/login", async (req, res) => {
  await mongoose.connect(dbUrl);
  let { username, email, password } = req.body;
  let chat = new Listing({
    username: username,
    email: email,
    password: password
  });
  chat.save();
  const info = Listing.find({});
  res.render("login.ejs", { info });
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login/username", async (req, res) => {
  mongoose.connection.close();
  await mongoose.connect(dbUrl);
  let { email, password } = req.body;
  console.log(`${email} ${password}`);
  const info = await Listing.find({});
  function linearSearch(info, target1, target2) {
    for (let i of info) {
      if (i.email === target1) {
        if (i.password === target2) {
          console.log(i.password);
          return 1;
        }
        else {
          return 0;
        }
      }
    }
    return -1;
  }
  target1 = email;
  target2 = password;
  const index = linearSearch(info, target1, target2);
  if (index === 1) {
    console.log(`Target ${target1} found at index ${index}`);
    res.redirect("/Search");
  }
  else if (index === 0) {
    console.log(`Target ${target1} found at index ${index} but Wrong Password`);
    res.render("username.ejs");
  }
  else {
    console.log(`Target ${target1} not found`);
    res.render("signup2.ejs");
  }
});
app.get("/signup2",(req,res)=>{
  res.render("signup2.ejs");
});
app.get("/Search",(req,res)=>{
  res.render("Search.ejs");
});
app.post("/explore", async (req, res) => {
  let {destination}=req.body;
  console.log(destination);
  mongoose.connection.close();
  await mongoose.connect(MONGO_URL1);
  const info = await List.find({});
  // console.log(info);
  const dest=destination.toUpperCase();
  console.log(dest);
  let post= await List.find({country:dest});
  console.log(post);
  res.render("Explore.ejs",{dest,post});
  
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
