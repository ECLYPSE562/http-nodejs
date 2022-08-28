import { createServer } from 'http';

createServer((req, res) => {
  res.write('dhashadfsdbjhbdf');
  res.end();
}).listen(process.env.PORT);
