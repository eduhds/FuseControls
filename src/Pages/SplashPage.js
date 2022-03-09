import { current } from '../Models/App';

export default class SplashPage {
	constructor() {
		setTimeout(() => {
			current.navigation.goToHome();
		}, 3000);
	}
}
