const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { default: mongoose } = require("mongoose");

function setUser(user) {
    return jwt.sign(
        {
            _id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET
    );
}

async function getUser(token) {
    if (!token) return null;

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);

        const foundedUser = await User.findOne({
            _id: user._id,
        });

        return foundedUser;
    } catch (error) {
        console.error("error is : ", error);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};
