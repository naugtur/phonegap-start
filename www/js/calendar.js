define([], function() {

	//initializes calendar module, appends its content to given node

	function init($node) {


		var auth = function() {
				var config = {
					'client_id': '664081262523.apps.googleusercontent.com',
					'scope': 'https://www.googleapis.com/auth/urlshortener'
				};

				gapi.auth.authorize(config, function() {
					console.log('Some motherfucker just logged in');
					console.log(gapi.auth.getToken());
				});
			}



	}


	return {
		init: init

	}

});