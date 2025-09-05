const express = require("express");
const { getNotification, createNotification } = require("../controllers/notificationController");

const router = express.Router();

router.get("/", getNotification);
router.post("/", createNotification);

module.exports = router;