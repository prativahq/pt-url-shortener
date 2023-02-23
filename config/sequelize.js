const Sequelize = require("sequelize");
// const mysql = require("mysql");
const config = require("./env");

// Set up the config
const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    host: config.mysql.host,
    port: config.mysql.port,
    // ssl: config.mysql.ssl.ca,
    dialect: "mysql",
    logging: false, // Disable logging
    operatorsAliases: 0, // Disable aliases,
  }
);

sequelize.authenticate();
// const conn = new mysql.createConnection(config);

module.exports = { sequelize, Sequelize };
