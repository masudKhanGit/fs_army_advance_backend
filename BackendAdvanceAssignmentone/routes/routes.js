const router = require("express").Router();

// Controllers
const {
  handleHome,
  handleHealth,
  handleRandomValue,
  randomProfile,
  handleCountStringNumberSymbol
} = require("../controller/controllers");

// EndPoints
router.get('/', handleHome)
router.get("/randomNumber", handleRandomValue);
router.get("/randomProfile", randomProfile);
router.get("/countStringNumberSymbol", handleCountStringNumberSymbol);

router.get("/health", handleHealth);

module.exports = router;
