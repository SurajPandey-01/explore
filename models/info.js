const mongoose=require("mongoose");
let Schema=mongoose.Schema;

const ListingSchema=new Schema({
    username:String,
    email:String,
    password:String,
});
const Listing =  mongoose.model("Listing",ListingSchema);
module.exports=Listing;
