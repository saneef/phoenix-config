const MOD = ['ctrl', 'shift'];
const scr = Screen.main().flippedVisibleFrame();
const halfWidth = scr.width / 2;
const quarterWidth = scr.width / 3;
const twoThirdWidth = scr.width * 2 / 3;
const threeFourthWidth = scr.width * 3 / 4;

const windowLocations = {
	full: {
		x: 0,
		y: 0,
		width: scr.width,
		height: scr.height
	},
	leftQuarter: {
		x: 0,
		y: 0,
		width: quarterWidth,
		height: scr.height
	},
	leftHalf: {
		x: 0,
		y: 0,
		width: halfWidth,
		height: scr.height
	},
	leftTwoThird: {
		x: 0,
		y: 0,
		width: twoThirdWidth,
		height: scr.height
	},
	leftThreeFourth: {
		y: 0,
		x: 0,
		width: threeFourthWidth,
		height: scr.height
	},
	rightQuarter: {
		y: 0,
		x: scr.width - quarterWidth,
		width: quarterWidth,
		height: scr.height
	},
	rightHalf: {
		y: 0,
		x: halfWidth,
		width: halfWidth,
		height: scr.height
	},
	rightTwoThird: {
		y: 0,
		x: scr.width - twoThirdWidth,
		width: twoThirdWidth,
		height: scr.height
	},
	rightThreeFourth: {
		y: 0,
		x: scr.width - threeFourthWidth,
		width: threeFourthWidth,
		height: scr.height
	},
	centerThreeFourth: {
		y: 0,
		x: (scr.width - threeFourthWidth) / 2,
		width: threeFourthWidth,
		height: scr.height
	}
}
