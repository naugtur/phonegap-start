define([], function() {

	var clientId = '170662303220';
	var $node,
	scopes = 'https://www.googleapis.com/auth/calendar';



	//initializes calendar module, appends its content to given node
	var init = function($anode) {
			$node=$anode;
			console.log('Some motherfucker started CALENDAR MODULE');
			$node.find('#login').click(auth);

	};


	var auth = function() {

			console.log('Some motherfucker is TRYING TO LOGIN');


			var config = {
				client_id: clientId,
				scope: scopes,
				immediate: false
			};

			gapi.auth.authorize(config, handleAuthResult);

		};

	var handleAuthResult = function(authResult) {

			console.log('Some motherfucker just LOGGED IN');

			makeApiCall();
	};

	var makeApiCall = function() {

			gapi.client.load('calendar', 'v3', function() {

				var request = gapi.client.calendar.calendarList.list({
					'userId': 'me'
				});


				request.execute(function(resp) {
					console.log('Some motherfucker just EXECUTED REQUEST');
					listCalendars(resp.items);
				});
			});
		};


	var listCalendars = function(items){
			$node.append('<ul id="calendarList"></ul>');

		$.each(items,function(num,item){
			$('#calendarList').append("<li class='calendar'>"+item.summary+"</li>");

		});

	};


	return {
		init: init
	};

});