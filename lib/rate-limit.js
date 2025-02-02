'use strict';

module.exports = function createRateLimitChecker() {
  // No rate limiting. Allow unlimited requests for all hosts.
  return function checkRateLimit() {
    // Always allow the request by returning undefined.
    return;
  };
};