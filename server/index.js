const Server = require('./app/Server'); 
const sendJSON = require('./app/tools/jsonResponse');
const parseUrl = require('./app/tools/parseUrl');
const userRouter = require('./app/routers/users');

const port = 5000;
const baseUrl = `http://localhost:${port}`;

const server = new Server();
      server.useTool(sendJSON);
      server.useTool(parseUrl(baseUrl));
      server.registerRouter(userRouter);
      server.listen(port);