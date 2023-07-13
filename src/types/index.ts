export type Config = {
  port: number;
};

export type User = {
  id: number;
  name: string;
};

export type RequestError = {
  error: Error;
  status: number;
};
