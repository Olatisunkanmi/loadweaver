import express, { Application } from 'express';
import { Server as HttpServer, createServer } from 'http';
import { CONFIG } from './env';

const path = require('path');

const appConfig = async (app: Application) => {
  app.use(express.static(path.join(__dirname, '../public')));

  const server = createServer(app);

  server.listen(CONFIG.PORT, () => {
    logger.info(`Server is running at http://localhost:${CONFIG.PORT}`);
  });
};

export default appConfig;
