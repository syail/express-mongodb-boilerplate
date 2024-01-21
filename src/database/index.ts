import mongoose from 'mongoose';
import { logger } from '../lib';

export async function connectToDataBase(url: string): Promise<ConnRes> {
  try {
    await mongoose.connect(url);
    logger.info('Connected to database.');
    logger.info(`Host: ${mongoose.connection.host}`);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

interface ConnRes {
  success: boolean;
}
