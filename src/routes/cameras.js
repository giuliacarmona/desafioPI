var express = require("express");
var router = express.Router();

var camerasController = require("../controllers/camerasController");

router.get("/listar", function (req, res) {
    camerasController.listar(req, res);
  });

module.exports = router;