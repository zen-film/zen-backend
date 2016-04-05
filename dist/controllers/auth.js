'use strict';

var passport = require('koa-passport');
var Router = require('koa-router');

var authRouter = new Router({ prefix: '/api/auth' });
authRouter.get('/facebook', passport.authenticate('facebook'));
authRouter.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/app',
  failureRedirect: '/'
}));

authRouter.get('/logout', function logoutHandler(ctx) {
  ctx.logout();
  ctx.redirect('/');
});

module.exports = authRouter;