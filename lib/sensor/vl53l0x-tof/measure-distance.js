'use strict';

const assert = require('assert');
const avg = require('./../../util/avg');
const distanceMeasurementFromPython = require('./distance-measurements-from-python')
const exec = require('./../../util/exec');

module.exports = function(config) {
  assert(config.pythonLongRangeScript, 'pythonLongRangeScript config');
  assert(config.pythonShortRangeScript, 'pythonShortRangeScript config');
  
  const execLongRange = exec(`python ${config.pythonLongRangeScript}`);
  const execShortRange = exec(`python ${config.pythonShortRangeScript}`);
  
  distanceMeasurementFromPython(execLongRange)
    .then(longRangeMeasurements => avg(longRangeMeasurements))
    .then(avg => console.log(`long avg: ${avg}`));
  distanceMeasurementFromPython(execShortRange)
    .then(shortRangeMeasurements => avg(shortRangeMeasurements))
    .then(avg => console.log(`short avg: ${avg}`));
};