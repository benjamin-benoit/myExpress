import HttpServer from './httpServer';

const app = HttpServer();
const port = 3000;

// Routes http
app.get('/', (req, res) => {
  console.log('get');
})

app.get('/api', (req, res) => {
  console.log('get API');
  res.json({hello :'From API'});
})

app.post('/sign-up', (req, res) => {
  console.log('post sign-up');
})

app.put('/update-login', (req, res) => {
  console.log('update login');
})

app.delete('/delete-login', (req, res) => {
  console.log('delete login');
})

//Render
// app.render('home', (err, html) => {
  
// })

app.listen(port,() => {
  console.log(`Server is listenning on ${port}`);
})
