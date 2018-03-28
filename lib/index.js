'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {string} target
 * @param {string} prefix
 * @return {string}
 */
var startsWith = exports.startsWith = function startsWith(target, prefix) {
  return target.slice(0, prefix.length) === prefix;
};

/**
 * @param {string} target
 * @param {string} prefix
 * @return {string}
 */
var withPrefix = function withPrefix(target, prefix) {
  if (startsWith(target, prefix)) {
    return target;
  }
  return prefix + target;
};

/**
 * If string doesn’t start with http:// or https:// then append http:// or https
 * @param {string} target
 * @param {boolean} useTLS
 * @return {string}
 */
var withHTTP = exports.withHTTP = function withHTTP(target, useTLS) {
  if (startsWith(target, 'http://') || startsWith(target, 'https://')) {
    return target;
  }
  return (useTLS ? 'https://' : 'http://') + target;
};

/**
 * If string doesn’t start with tell:// then append it
 * @param {string} target
 * @return {string}
 */
var withTell = exports.withTell = function withTell(target) {
  if (startsWith(target, 'tell://')) {
    return target;
  }
  return 'tell://' + target;
};

exports.default = withPrefix;