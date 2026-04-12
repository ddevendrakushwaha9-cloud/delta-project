const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
   image: {
    filename: { type: String, default: "defaultimage" },
    url: {
      type: String,
      default: "https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?q=80&w=1010&auto=format&fit=crop&ixlib=rb-4.1.0",
      set: (v) =>
        v === ""
          ? "https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?q=80&w=1010&auto=format&fit=crop&ixlib=rb-4.1.0"
          : v,
    },
  },

  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async(listing)=>{
  if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews} });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;