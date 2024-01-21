import { NextFunction, Request, RequestHandler, Response } from 'express';

function asyncHandler(requestHandler: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      console.log(err + '');
      return res.json({ status: 500, message: 'Internal server error' });
    }
  };
}

export { asyncHandler };
