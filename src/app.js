"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var httpServer_1 = __importDefault(require("./httpServer"));
var app = httpServer_1["default"]();
app.listen(8080);
app.get('/home', function (req, res) {
    console.log('page home');
    res.write('page home');
    res.end();
});
app.get('/page', function (req, res) {
    console.log('page');
    res.write('page');
    res.end();
});
