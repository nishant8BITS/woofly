'use strict';

angular.module('form').directive('date', [
	function() {
		return {
			replace: true,
			templateUrl: 'modules/form/views/fields/date.view.html',
			restrict: 'AE',
			link: function postLink(scope, element, attrs) {
				// Textbox directive logic
			}
		};
	}
]);