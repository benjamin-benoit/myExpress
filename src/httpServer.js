"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var HttpServer = /** @class */ (function () {
    function HttpServer() {
        this.httpServer = null;
        this.routes = [];
    }
    HttpServer.prototype.get = function (path, callback) {
        this.routes.push({ method: "GET", path: path, callback: callback });
    };
    HttpServer.prototype.listen = function (port) {
        this.httpServer = http_1["default"].createServer(function (req, res) {
            var method = req.method, url = req.url;
            if (method === 'GET' && url === '/home') {
                res.write('home');
                res.end();
            }
        }).listen(port);
    };
    return HttpServer;
}());

exports["default"] = (function () { return new HttpServer(); });
