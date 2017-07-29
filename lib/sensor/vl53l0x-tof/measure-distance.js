'use strict';

const assert = require('assert');
const avg = require('./../../util/avg');
const distanceMeasurementFromPython = require('./../../')
const exec = require('./../../util/exec');

module.exports = function(config) {
  assert(config.pythonLongRangeScript, 'pythonLongRangeScript config');
  assert(config.pythonShortRangeScript, 'pythonShortRangeScript config var');
  
  const execLongRange = exec(`python ${pythonLongRangeScript}`);
  const execShortRange = exec(`python ${pythonShortRangeScript}`);
  
  const longRangeMeasurements = distanceMeasurementFromPython(execLongRange);
  const shortRangeMeasurement = distanceMeasurementFromPython(execShortRange);
  
  const longRangeAverage = avg(longRangeMeasurements);
  const shortRangeMeasurement = avg(shortRangeMeasurement);
  
  console.log(`long avg: ${longRangeAverage} mm, short avg: ${shortRangeMeasurement}`);
};