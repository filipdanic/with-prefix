/**
 * @param {string} target
 * @param {string} prefix
 * @return {string}
 */
export const startsWith = (target, prefix) =>
  target.slice(0, prefix.length) === prefix;

/**
 * @param {string} target
 * @param {string} prefix
 * @return {string}
 */
const withPrefix = (target, prefix) => {
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
export const withHTTP = (target, useTLS) => {
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
export const withTell = (target) => {
  if (startsWith(target, 'tell://')) {
    return target;
  }
  return 'tell://' + target;
};

export default withPrefix;
