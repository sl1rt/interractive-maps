const http = require('http');
const EventEmitter = require('events');

module.exports = class Server {
  constructor() {
    this._emitter = new EventEmitter();
    this._server = this._createServer();
    this._tools = [];
  }

  useTool(method) {
    this._tools.push(method);
  }

  registerRouter(router) {
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoints[path]

      Object.keys(endpoint).forEach(method => {
        const handler = endpoint[method];
        this._emitter.on(this._getRouterMask(path, method), (request, response) => {
          handler(request, response);
        });
      });
    })
  }

  _createServer() {
    return http.createServer((request, response) => {
      let body = '';

      request.on('data', (part) => {
        body += part;
      });

      request.on('end', () => {
        if(body) {
          req.body = JSON.parse(body);
        }

        //middleware add
        this._tools.forEach(tool => tool(request, response))

        const emitted = this._emitter.emit(this._getRouterMask(request.pathname, request.method), request, response);
        if(!emitted) {
          response.end("Method doesn't exists");
        } 
      });
    });
  } 

  _getRouterMask(path, method) {
    return `[${path}]:[${method}]`;
  }

  listen(port) {
    this._server.listen(port, () => {
      console.log('Сервер запущен');
    })
  }
}