const fs = require("fs");

module.exports = {
  mysql: {
    // host: "localhost",
    // port: 3306,
    // database: "shortener_dev",
    // username: "root",
    // password: "",
    host: "pt-url-server.mysql.database.azure.com",
    user: "pturl",
    password: "#server123",
    database: "shortener_dev_test",
    port: 3306,
    ssl: {
      ca: fs.readFileSync(
        "/Users/user/Documents/prativa/pt-url/pt-url-shortener/BaltimoreCyberTrustRoot.crt.pem"
      ),
    },
  },
};
