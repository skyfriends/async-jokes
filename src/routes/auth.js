import { Router } from 'express';
import fetch from 'node-fetch';

const jokes = Router();

jokes.get('/jokes', (req, res) => {
  const getJoke = () =>
    fetch('https://api.icndb.com/jokes/random')
      .then(resp => resp.json())
      .then(data => data.value.joke);

  const joke = async () => {
    try {
      const result = await getJoke();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  const jokeToSend = joke();
  res.json(jokeToSend);
});

export default jokes;
