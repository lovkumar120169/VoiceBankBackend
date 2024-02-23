const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb+srv://lovkumar:kumar@cluster0.ddqewce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {connection};