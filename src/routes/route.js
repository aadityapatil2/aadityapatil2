const express = require('express');
const router = express.Router();

const userController=require("../controllers/userController")
const bookController=require("../controllers/bookController")
const commonMw = require("../middlewares/commonMiddleware")


router.post("/register",userController.createUser);
router.post("/login", userController.userLogin)
router.post("/books",commonMw.authentication,bookController.createbook)
router.get("/books",commonMw.authentication,bookController.getBooks)
router.get("/books/:bookId",commonMw.authentication,bookController.getBooksDetail)
router.put("/books/:bookId",commonMw.authentication,bookController.putBooks)
router.delete("/books/:bookId",commonMw.authentication,bookController.deleteBookParam)

module.exports = router;