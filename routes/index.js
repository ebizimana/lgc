var express = require("express")
router = express.Router()
IndexController = require("../controllers/index")

// home page
router.get("/", IndexController.homePage)

module.exports = router