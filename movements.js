var leftQuarter = new Key('1', MOD, () => {
	Window.focused().setFrame(windowLocations.leftQuarter);
});

var leftHalf = new Key('2', MOD, () => {
	Window.focused().setFrame(windowLocations.leftHalf);
});

var leftTwoThird = new Key('3', MOD, () => {
	Window.focused().setFrame(windowLocations.leftTwoThird);
});

var full = new Key('5', MOD, () => {
	Window.focused().setFrame(windowLocations.full);
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
