import { Router } from 'express';
import { exampleController } from '../controllers';

const exampleRouter = Router();

exampleRouter.get('/ping', exampleController.ping);

export { exampleRouter };
