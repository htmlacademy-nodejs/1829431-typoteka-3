'use strict';

const DEFAULT_SERVER_PORT = 3000;

const STATUS_CODES = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401
};

module.exports = {
  DEFAULT_SERVER_PORT,
  STATUS_CODES
};