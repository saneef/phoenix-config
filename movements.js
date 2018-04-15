const leftQuarter = new Key('1', MOD, () => {
	Window.focused().setFrame(windowLocations.leftQuarter);
});

const leftHalf = new Key('2', MOD, () => {
	Window.focused().setFrame(windowLocations.leftHalf);
});

const leftTwoThird = new Key('3', MOD, () => {
	Window.focused().setFrame(windowLocations.leftTwoThird);
});

const leftThreeFourth = new Key('4', MOD, () => {
	Window.focused().setFrame(windowLocations.leftThreeFourth);
});

const full = new Key('5', MOD, () => {
	Window.focused().setFrame(windowLocations.full);
});

const centerThreeFourth = new Key('6', MOD, () => {
	Window.focused().setFrame(windowLocations.centerThreeFourth);
});

const rightThreeFourth = new Key('7', MOD, () => {
	Window.focused().setFrame(windowLocations.rightThreeFourth);
});

const rightTwoThird = new Key('8', MOD, () => {
	Window.focused().setFrame(windowLocations.rightTwoThird);
});

const rightHalf = new Key('9', MOD, () => {
	Window.focused().setFrame(windowLocations.rightHalf);
});

const rightQuarter = new Key('0', MOD, () => {
	Window.focused().setFrame(windowLocations.rightQuarter);
});

const center = new Key('-', MOD, () => {
	const screen = Screen.main().flippedVisibleFrame();
	const window = Window.focused();

	if (window) {
		window.setTopLeft({
			x: screen.x + (screen.width / 2) - (window.frame().width / 2),
			y: screen.y + (screen.height / 2) - (window.frame().height / 2)
		});
	}
});
