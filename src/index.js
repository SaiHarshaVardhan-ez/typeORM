const { createConnection } = require("typeorm");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "9959",
  database: "typeorm",
  entities: [
    require("./entity/User")
  ],
  synchronize: true,
}).then(connection => {
  const app = express();
  app.use(bodyParser.json());
  app.use("/api", routes);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}).catch(error => console.log(error));
