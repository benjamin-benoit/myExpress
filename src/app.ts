import HttpServer from './httpServer';

const app = HttpServer();
app.listen(8080);

app.get('/home', (req: any, res: any) => {
    console.log('page home');
    res.write('page home');
    res.end();
});

app.get('/page', (req:any, res:any) => {
    console.log('page');
    res.write('page');
    res.end();
});