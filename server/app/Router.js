module.exports = class Router {

  constructor () {
    this.endpoints = [];
  }

  _create(path, method = "GET", handler) {
    if(!this.endpoints[path]) {
      this.endpoints[path] = {}
    }
    const endpoint = this.endpoints[path];
    if(endpoint[method]) {
      throw new Error(`Метод ${method} в ${path} уже используется`);
    }
    endpoint[method] = handler;  
  }

  get(path, handler) {
    this._create(path,'GET',handler);
  }
  post(path, handler) {
    this._create(path,'POST',handler);
  }
  put(path, handler) {
    this._create(path,'PUT',handler);
  }
  delete(path, handler) {
    this._create(path,'DELETE',handler);
  }
}