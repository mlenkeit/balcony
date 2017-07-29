'use strict';

module.exports = function(execPython) {  
  return execPython().then(stdout => {
    const pattern = /\d+ mm, \d+ cm/ig;
    const matches = stdout.match(pattern);
    const measurements = matches.map(match => {
      const matches = /(\d+) mm/.exec(match);
      const measurementStr = matches[1];
      return parseInt(measurementStr, 10);
    });
    return measurements;
  });
};