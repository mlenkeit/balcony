'use strict';

const exec = require('child_process').exec;

module.exports = function(command, options) {
  options = options || {};
  return function() {
    return new Promise((resolve, reject) => {
      exec(command, options, (err, stdout, stderr) {
        if (err) return reject(err);
        resolve(stdout.toString());
      });
    });
  };
};