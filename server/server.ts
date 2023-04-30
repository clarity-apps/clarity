/* eslint-disable no-console */
import { Response, Request } from 'express';
import * as express from 'express';
import * as dotenv from 'dotenv';
// import path from 'path';

dotenv.config({ path: `${__dirname}/.env` });

const app = express();
const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  console.log('/ endpoint successfully responsded');
  res.status(200).send('welcome');
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
