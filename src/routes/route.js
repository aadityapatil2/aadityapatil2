const express = require('express');
const router = express.Router();
const userController=require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/register",userController.createUser);
// ===========================================================


module.exports = router;