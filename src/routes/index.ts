import { Router } from 'express';
import { exampleRouter } from './example';

const defaultRouter = Router();

defaultRouter.use('/v1', exampleRouter);

export { defaultRouter };
