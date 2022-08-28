import { createServer } from 'http';

createServer((req, res) => {
  res.write('dhffsdfess');
  res.end();
}).listen(process.env.PORT);
