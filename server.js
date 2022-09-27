import express from "express";
import mongoose from "mongoose";
const PORT = 4000;
const app = express();

await mongoose.connect(
    "mongodb+srv://app_developer:Qu4QNtLhPlgnNwXd@cluster0.mnhjbg0.mongodb.net/?retryWrites=true&w=majority");
console.log("MongoDB connection is successful");

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
});