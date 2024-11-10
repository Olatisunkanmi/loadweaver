import express, { Express } from "express";
import Logger from "./config/logger";
import appConfig from "./config/app";

const app: Express = express();

declare global {
  var logger: ReturnType<typeof Logger.createLogger>;
}

global.logger = Logger.createLogger({ label: "Load Weaver Service" });

appConfig(app);

export default app;
