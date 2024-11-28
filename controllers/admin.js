const User = require("../models/user");

async function getAllUsers(req, res) {
    const users = await User.find({});
    return res.json({ users });
}

async function getUserByEmail(req, res) {
    const { email } = req.headers;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).send("User not found");

    return res.status(200).send(user);
}

module.exports = {
    getAllUsers,
    getUserByEmail,
};
