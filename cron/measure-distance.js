'use strict';

const measureDistance = require('./../lib/sensor/vl53l0x/measure-distance');

const pythonLongRangeScript = process.env.python_long_range_script;
assert(pythonLongRangeScript, 'python_long_range_script env var');
const pythonShortRangeScript = process.env.python_short_range_script;
assert(pythonShortRangeScript, 'python_short_range_script env var');

measureDistance({
  pythonLongRangeScript: pythonLongRangeScript,
  pythonShortRangeScript: pythonShortRangeScript
});
