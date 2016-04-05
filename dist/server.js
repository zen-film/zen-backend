'use strict';

require('koa');

var app = koa();

app.use(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          this.body = 'Please, use REST API';

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

app.listen(3000);