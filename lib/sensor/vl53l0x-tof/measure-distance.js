'use strict';

const assert = require('assert');
const avg = require('./../../util/avg');
const distanceMeasurementFromPython = require('./distance-measurements-from-python')
const exec = require('./../../util/exec');
const path = require('path');

module.exports = function(config) {
  assert(config.pythonLongRangeScript, 'pythonLongRangeScript config');
  assert(config.pythonShortRangeScript, 'pythonShortRangeScript config');
  
  const pythonLongRangeScriptPathObj = path.parse(config.pythonLongRangeScript);
  const execLongRange = exec(`python ${pythonLongRangeScriptPathObj.base}`, { cwd: pythonLongRangeScriptPathObj.dir });
  const pythonShortRangeScriptPathObj = path.parse(config.pythonShortRangeScript);
  const execShortRange = exec(`python ${pythonShortRangeScriptPathObj.base}`, { cwd: pythonShortRangeScriptPathObj.dir });
  
  distanceMeasurementFromPython(execLongRange)
    .then(longRangeMeasurements => avg(longRangeMeasurements))
    .then(avg => console.log(`long avg: ${avg}`));
  distanceMeasurementFromPython(execShortRange)
    .then(shortRangeMeasurements => avg(shortRangeMeasurements))
    .then(avg => console.log(`short avg: ${avg}`));
};