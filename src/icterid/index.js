import Koa from 'koa';
import Router from 'koa-router';

class Icterid {
  constructor(config = { port: 8585 }) {
    this.config = config;
    this.application = new Koa();
    this.router = new Router();
  }
  
  initializeRouter() {
    this.router.get('/', async (ctx) => {
      ctx.response.body = "<b>Boom!</b>";
    });
    
    this.application
      .use(this.router.routes())
      .use(this.router.allowedMethods());
    return this;
  }

  start() {
    this.application.listen(this.config.port);
  }
}

export default Icterid;