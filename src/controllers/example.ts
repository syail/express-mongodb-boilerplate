import { Request, Response } from 'express';

function ping(req: Request, res: Response) {
  res.json({ status: 200, message: 'pong' });
}

export { ping };
