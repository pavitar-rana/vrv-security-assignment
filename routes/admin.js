const express = require("express");
const { getAllUsers, getUserByEmail } = require("../controllers/admin");

const router = express.Router();

router.get("/get-all-users", getAllUsers);
router.get("/get-user-by-email", getUserByEmail);

module.exports = router;
