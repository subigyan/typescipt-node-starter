import express from "express";
import config from "config";
import { connectDatabase } from "./utils/connectDatabase";
import logger from "./utils/logger";
import routes from "./routes";

const app = express();
app.use(express.json());

Object.entries(routes).forEach(([routeName, routes]) => {
  app.use(`/api/${routeName}`, routes);
});

const port = config.get<number>("port");
const mongodbUrl = config.get<string>("mongodbUrl");

app.listen(port, async () => {
  logger.info("Server is running on port 3000");
  await connectDatabase(mongodbUrl);
});
