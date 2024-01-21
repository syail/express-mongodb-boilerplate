import { model, Schema } from 'mongoose';

export interface Example {
  content: string;
}

interface ExampleSchema extends Example {
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<ExampleSchema>(
  {
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ExampleModel = model<ExampleSchema>('Example', schema);
