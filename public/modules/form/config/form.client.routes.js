'use strict';

//Setting up route
angular.module('form').config(['$stateProvider',
	function($stateProvider) {
		// Form state routing
		$stateProvider.
		state('form', {
			url: '/create',
			templateUrl: 'modules/form/views/form-create.client.view.html',
			controller: 'FormCreateController'
		});
	}
]);