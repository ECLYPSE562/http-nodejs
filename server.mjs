import { createServer } from 'http';

createServer((req, res) => {
  res.write('dha');
  res.end();
}).listen(process.env.PORT);
