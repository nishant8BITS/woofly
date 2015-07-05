'use strict';

angular.module('form').directive('checkbox', [
	function() {
		return {
			replace: true,
			templateUrl: 'modules/form/views/fields/checkbox.view.html',
			restrict: 'AE',
			link: function postLink(scope, element, attrs) {
				// Textbox directive logic
			}
		};
	}
]);