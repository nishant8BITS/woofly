'use strict';

angular.module('form').directive('dropdown', [
	function() {
		return {
			replace: true,
			templateUrl: 'modules/form/views/fields/dropdown.view.html',
			restrict: 'AE',
			link: function postLink(scope, element, attrs) {
				// Textbox directive logic
			}
		};
	}
]);