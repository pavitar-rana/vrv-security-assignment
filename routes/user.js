const express = require("express");
const {
    handleUserSignup,
    handleUserLogin,
    getInfo,
} = require("../controllers/user");
const { redirectTo } = require("../middlewares/auth");

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);
router.get("/info", redirectTo(["user", "admin"]), getInfo);

module.exports = router;
