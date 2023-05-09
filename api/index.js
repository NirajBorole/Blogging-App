const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const authUsers = require("./routes/user")
const authPost = require("./routes/post")
const authCat = require("./routes/categories")

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.use("/auth", authRoute)
app.use("/users", authUsers)
app.use("/posts", authPost)
app.use("/category", authCat)

app.listen("5000", () => {
    console.log("server up n running!");
});