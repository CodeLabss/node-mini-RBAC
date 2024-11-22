const express = require("express")
const router = express.Router()
const verifyToken = require("../middlewares/authMiddleware")
const authrizeRoles = require("../middlewares/roleMiddleware")

// admin
router.get("/admin", verifyToken, authrizeRoles("admin"), (req, res) => {
    res.send("Admin page")
})
// manager
router.get("/manager", verifyToken, authrizeRoles("admin", "manager"), (req, res) => {
    res.send("Manager page")
})
// all
router.get("/user", verifyToken, authrizeRoles("admin", "manager", "user"),  (req, res) => {
    res.send("User page")
})

module.exports = router