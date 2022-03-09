import SplashPage from '../Pages/SplashPage';
import HomePage from '../Pages/HomePage';

export default class Navigation {
	constructor() {
		this.pages = [new SplashPage()];
	}

	goToHome() {
		this.pages = [new HomePage()];
	}

	navigate(arg) {
		switch (arg.data) {
			case '':
				break;
			default:
				//this.pages.push(new otherPage(arg.data));
				break;
		}
	}

	goBack() {
		this.pages.pop();
	}
}
