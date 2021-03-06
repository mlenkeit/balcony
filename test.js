const stdout = `Creating tof...
Start ranging...
VL53L0X Start Ranging Object 0 Address 0x29

VL53L0X_GetDeviceInfo:
Device Name : VL53L0X ES1 or later
Device Type : VL53L0X
Device ID : VL53L0CAV0DH/1$5
ProductRevisionMajor : 1
ProductRevisionMinor : 1
VL53L0X_LONG_RANGE_MODE
API Status: 0 : No Error
Timing 33 ms
743 mm, 74 cm, 1
755 mm, 75 cm, 2
711 mm, 71 cm, 3
758 mm, 75 cm, 4
729 mm, 72 cm, 5
690 mm, 69 cm, 6
735 mm, 73 cm, 7
742 mm, 74 cm, 8
634 mm, 63 cm, 9
722 mm, 72 cm, 10
Call of VL53L0X_StopMeasurement
Wait Stop to be competed
API Status: 0 : No Error`;

const pattern = /\d+ mm, \d+ cm/ig;
const matches = stdout.match(pattern);
const measurements = matches.map(match => {
  const matches = /(\d+) mm/.exec(match);
  const measurementStr = matches[1];
  return parseInt(measurementStr, 10);
});
const sum = measurements.reduce((sum, measurement) => sum += measurement);
const avg = sum / measurements.length;
console.log(avg);