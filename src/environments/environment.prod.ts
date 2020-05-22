export const environment = {
	production: true,
	baseUrl: 'http://rides.downrivercycling.org',
	auth: {
		clientID: 48540,
		domain: 'https://www.strava.com/oauth/authorize',
		redirect: 'http://rides.downrivercycling.org/strava/code',
		scope: 'read,activity:read'
	}
};
