const User = require("../models/user");
const { setUser, getUser } = require("../service/auth");

async function handleUserSignup(req, res) {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password)
        return res.status(400).send("All input is required");

    if (role && !["user", "admin", "moderator"].includes(role))
        return res.status(400).send("Invalid role");

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).send("User with this email already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        role,
    });
    return res.json({
        message: "User created successfully",
        user,
    });
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user)
        return res
            .status(400)
            .send("User not found, please check your credentials");

    const token = setUser(user);
    return res.json({
        message: "User logged in successfully",

        token,
    });
}

async function getInfo(req, res) {
    if (!req.user) return res.status(404).send("User not found");

    return res.json({ user: req.user });
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
    getInfo,
};
