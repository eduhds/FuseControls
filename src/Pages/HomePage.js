export default class HomePage {
	constructor() {
		this.controls = [new FuseControl('Text')];
	}
}

class FuseControl {
	constructor(name) {
		this.name = name;
	}
}
