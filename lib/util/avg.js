'use strict';

module.exports = function(arr) {
  return arr.reduce((sum, curr) => sum += curr) / arr.length;
};