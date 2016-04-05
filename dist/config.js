'use strict';

var env = process.env;

var defaultConfig = {
  ROOT: 'http://127.0.0.1:3000',
  HOST: '127.0.0.1',
  PORT: 3000,
  NODE_ENV: 'production',
  MONGODB_URL: defaultConfig.MONGODB_URL || 'mongodb://localhost:27017/zen'
};

module.exports = Object.assign({}, defaultConfig, env);