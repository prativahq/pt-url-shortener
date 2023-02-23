const fs = require("fs");

module.exports = {
  mysql: {
    // host: "localhost",
    // port: 3306,
    // database: "shortener",
    // username: "root",
    // password: "",
    host: "pt-url-server.mysql.database.azure.com",
    user: "pturl",
    password: "#server123",
    database: "shortener",
    port: 3306,
    ssl: {
      ca: fs.readFileSync(
        "D:\\Parentheses\\mysql-nodejs\\BaltimoreCyberTrustRoot.crt.pem"
      ),
    },
  },
};
