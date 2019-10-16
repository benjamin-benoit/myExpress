import http from 'http';

interface Route {
  method: string,
  path: string,
  callback: Function
}

class HttpServer {
  private httpServer:(http.Server|null) = null;
  private routes: Route[] = [];

  get(path: string, callback:Function) {
    this.routes.push({method: "GET", path, callback});
  }

  listen(port: number):void {
    this.httpServer = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) => {
      const { method, url } = req;
      if (method === 'GET' && url === '/home') {
        res.write('home');
        res.end();
      }
    }).listen(port);
  }
}

export default() => new HttpServer();