require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Server Connected")
    } catch (error) {
        console.log(error)
    }
}

connection();