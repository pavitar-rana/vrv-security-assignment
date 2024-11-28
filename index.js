require("dotenv").config();
const express = require("express");

const { connectToMongoDB } = require("./connect");
const { checkForAuthenticUser, redirectTo } = require("./middlewares/auth");

const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

const app = express();

connectToMongoDB(process.env.MONGODB).then(() =>
    console.log("Mongodb connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(checkForAuthenticUser);

app.use("/admin", redirectTo(["admin"]), adminRoute);
app.use("/user", userRoute);

app.get("/admin", redirectTo(["admin"]), (req, res) => {
    return res.send("Welcome Admin");
});

app.listen(3000, () => {
    console.log("Server is running on port : http://localhost:3000");
});
