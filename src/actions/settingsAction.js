import { DISABLE_BALANCE_ON_ADD,DISABLE_BALANCE_ON_EDIT,ALLOW_REGISTRATION } from './type'

export const setDisableBalanceOnAdd = () => {
	//Get Settings From local Storage
	const settings = JSON.parse(localStorage.getItem('settings'))

	//Toggol
	settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
	//Set Back
	localStorage.setItem('settings', JSON.stringify(settings));
	return {
		type: DISABLE_BALANCE_ON_ADD,
		payload: settings.disableBalanceOnAdd
	};
};

export const setDisableBalanceOnEdit = () => {
	//Get Settings From local Storage
	const settings = JSON.parse(localStorage.getItem('settings'))

	//Toggol
	settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
	//Set Back
	localStorage.setItem('settings', JSON.stringify(settings));
	return {
		type: DISABLE_BALANCE_ON_EDIT,
		payload: settings.disableBalanceOnEdit
	};
};

export const setAllowRegistration = () => {
	//Get Settings From local Storage
	const settings = JSON.parse(localStorage.getItem('settings'))

	//Toggol
	settings.allowRegistration = !settings.allowRegistration;
	//Set Back
	localStorage.setItem('settings', JSON.stringify(settings));
	return {
		type: ALLOW_REGISTRATION,
		payload: settings.allowRegistration
	};
};
