import express, { Express } from "express";
import config from "../config";
import userRouter from "./router/users";
import handleErrors from "./middleware/error-handler";
import cors from "cors";
import bodyParser from "body-parser";

const createServer = (): void => {
  const app: Express = express();

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/user", userRouter);
  app.use("/", handleErrors);

  app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
  });
};

export default createServer;
