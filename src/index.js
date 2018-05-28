import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import jokes from './routes/auth';

const PORT = process.env.PORT || 4321;
const app = express();

const corsOptions = {
  origin: 'http://localhost:1234',
};

app
  .use('*', cors(corsOptions))
  .use(bodyParser.json())
  .use(jokes)
  .listen(PORT, () => console.log(`Server up on ${PORT}\n`));
