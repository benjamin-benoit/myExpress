import { createServer, IncomingMessage, ServerResponse } from 'http'

interface Route {
  method: string,
  path: string,
  callback: Function
}

class HttpServer {

  private server: any;
  private routes: any; //Routes;

  constructor() {
    this.routes = {
      'GET' : [],
      'POST' : [],
      'DELETE' : [],
      'PUT' : []
    }
    this.server = createServer( (req: IncomingMessage, res: ServerResponse) => {
      //const {method, url} = req
      const response = this.handleResponse(res);
      // step 1 : Recupérer la méthode
      const method: string = req.method;
      // step 2 : Récupérer la route
      const url: string = req.url;
      // step 3 : Appeler la bonne méthode http
      const route = this.routes[method].find( (item: any) => item.url === url)
      if (route !== undefined) {
        route.callback(req, response);
        }
    })
  }

  // private httpServer:(http.Server|null) = null;
  // private routes: Route[] = [];

  // get(path: string, callback:Function) {
  //   this.routes.push({method: "GET", path, callback});
  // }

  // listen(port: number):void {
  //   this.httpServer = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) => {
  //     const { method, url } = req;
  //     if (method === 'GET' && url === '/home') {
  //       res.write('home');
  //       res.end();
  //     }
  //   }).listen(port);
  // }

  listen(port: number, callback: Function) {
    this.server.listen(port, callback);
  }

  get(url: string, callback: Function) {
    this.routes.GET.push({url, callback});
  }

  post(url: string, callback: Function) {
    this.routes.POST.push({url, callback});
  }

  delete(url: string, callback: Function) {
    this.routes.DELETE.push({url, callback});
  }

  put(url: string, callback: Function) {
    this.routes.PUT.push({url, callback});
  }

  handleResponse(res: ServerResponse ) {
    const json = (item: any) => {
      res.write(JSON.stringify(item));
      res.end();
    }
    return {
      json, ...res
    }
    //return Object.assign({}, {json}, res)  Attention à l'ordre
  }
}

export default() => new HttpServer();