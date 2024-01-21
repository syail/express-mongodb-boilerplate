import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import { asyncHandler, logger } from './lib';
import { defaultRouter } from './routes';
import { connectToDataBase } from './database';

main();

async function main() {
  const app = express();

  logger.info(`Current environment: ${process.env.NODE_ENV}`);

  const connRes = await connectToDataBase(process.env.MONGO_URL!);

  if (!connRes.success) {
    logger.error('Could not connect to database.');
    return;
  }

  if (process.env.NODE_ENV == 'development') {
    useLogger(app);
  }
  app.use(express.json());
  app.use(defaultRouter);

  app.listen(process.env.PORT, () => {
    logger.info(`Server listening on port ${process.env.PORT}`);
  });
}

function useLogger(app: express.Application) {
  morgan.token('real-ip', (req, res) => {
    return (req.headers['cf-connecting-ip'] as string) || req.socket.remoteAddress;
  });
  app.use(
    asyncHandler(
      morgan(
        ':real-ip - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
      )
    )
  );
}
