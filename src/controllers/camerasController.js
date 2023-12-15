var camerasModel = require("../models/camerasModel");

function listar(req, res) {
    camerasModel.listar().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  module.exports = {
    listar
  };