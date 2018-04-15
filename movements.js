var leftQuarter = new Key('1', MOD, () => {
	Window.focused().setFrame(windowLocations.leftQuarter);
});

var leftHalf = new Key('2', MOD, () => {
	Window.focused().setFrame(windowLocations.leftHalf);
});

var leftTwoThird = new Key('3', MOD, () => {
	Window.focused().setFrame(windowLocations.leftTwoThird);
});

var leftThreeFourth = new Key('4', MOD, () => {
	Window.focused().setFrame(windowLocations.leftThreeFourth);
});

var full = new Key('5', MOD, () => {
	Window.focused().setFrame(windowLocations.full);
});

var centerThreeFourth = new Key('6', MOD, () => {
	Window.focused().setFrame(windowLocations.centerThreeFourth);
});

var rightThreeFourth = new Key('7', MOD, () => {
	Window.focused().setFrame(windowLocations.rightThreeFourth);
});

var rightTwoThird = new Key('8', MOD, () => {
	Window.focused().setFrame(windowLocations.rightTwoThird);
});

var rightHalf = new Key('9', MOD, () => {
	Window.focused().setFrame(windowLocations.rightHalf);
});

var rightQuarter = new Key('0', MOD, () => {
	Window.focused().setFrame(windowLocations.rightQuarter);
});
