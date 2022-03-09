import Navigation from '../Services/Navigation';

export let current = {
	navigation: new Navigation(),
};

export default class App {
	constructor() {
		this.current = current;
	}
}
