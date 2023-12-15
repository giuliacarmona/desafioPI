var database = require("../database/config");

function listar() {
    var query = `select id, nome from camera`;
  
    return database.executar(query);
  }

module.exports = {
    listar
};