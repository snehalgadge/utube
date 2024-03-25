// require('dotenv').config({path:'/.env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { config } from "dotenv";

dotenv.config({
  path: "/.env",
});

connectDB();

/*
import express from "express";
const app = express();
// function connectDB (){}
// connectDB();

(async () => {
  // ;(async () =>{})
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("Error", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log("App is listening on", process.env.PORT);
    });
  } catch (err) {
    console.log("Error", err);
    // console.error("Error: ",err)
    throw err;
  }
})(); 
*/
