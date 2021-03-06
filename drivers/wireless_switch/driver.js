'use strict';

const path = require('path');
const ZigBeeDriver = require('homey-zigbeedriver');

// https://github.com/a4refillpad/Xiaomi/blob/master/devicetypes/a4refillpad/xiaomi-zigbee-button.src/xiaomi-zigbee-button.groovy
// fingerprint profileId: "0104", deviceId: "0104",
// inClusters: "0000, 0003",
// outClusters: "0000(Basic), 0004(Groups), 0003(Identify), 0006(On/Off), 0008(Level Control), 0005(Scenes)",
// manufacturer: "LUMI", model: "lumi.sensor_switch", deviceJoinName: "Xiaomi Button"

module.exports = new ZigBeeDriver(path.basename(__dirname), {
	debug: false,
	capabilities: {
		onoff: {
			command_endpoint: 0,
			command_cluster: 'genOnOff',
			// command_set: value => value ? 'on' : 'off',
			// command_set_parser: () => ({}),
			command_get: 'onOff',
			command_report_parser: value => value === 1,
		},
		measure_battery: {
			// command_endpoint: 0,
			// command_cluster: 'genPowerCfg',
			// command_set: value => value ? 'on' : 'off',
			// command_set_parser: () => ({}),
			// command_get: 'batteryPercentageRemaining',
			// BatteryPercentageRemaining indicates the remaining battery life as a percentage of the complete battery lifespan, expressed to the nearest halfpercent in the range 0 to 100 - for example, 0xAF represents 87.5%.
			// The special value 0xFF indicates an invalid or unknown measurement.
			// command_report_parser: value => value / 2,
		},
		alarm_battery: {},
	},
});
