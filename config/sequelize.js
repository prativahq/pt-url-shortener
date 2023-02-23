const Sequelize = require("sequelize");
const config = require("./env");
// Set up the config
const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
    port: config.mysql.port,
    ssl: config.mysql.ssl.ca,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
    logging: false, // Disable logging
    operatorsAliases: 0, // Disable aliases,
  }
);
sequelize.authenticate();

module.exports = { sequelize, Sequelize };
