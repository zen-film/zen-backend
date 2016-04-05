import 'koa';
let app = koa();

app.use(function *(){
  this.body = 'Please, use REST API';
});

app.listen(3000);
