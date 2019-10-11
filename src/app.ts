import * as http from 'http';

export class App {
  port:number | string ;

  constructor(port: number | string){
      this.port = port;
  }

}