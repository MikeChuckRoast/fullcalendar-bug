// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	baseUrl: 'http://localhost:8080',
	auth: {
		clientID: 48540,
		domain: 'https://www.strava.com/oauth/authorize',
		redirect: 'http://localhost:8080/strava/code',
		scope: 'read,activity:read'
	},
	firebaseConfig: {
		apiKey: 'AIzaSyDQneEOjzFxDPmzSUT2Dsf57-u7AW0nXqk',
		authDomain: 'dcc-web-app.firebaseapp.com',
		projectId: 'dcc-web-app',
		storageBucket: 'dcc-web-app.appspot.com',
		messagingSenderId: '102704883232',
		appId: '1:102704883232:web:d0895cdde5c21c6c163e45',
		measurementId: 'G-2RRG7TZFX2'
	}
};
