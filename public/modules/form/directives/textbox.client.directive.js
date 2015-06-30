'use strict';

angular.module('form').directive('textbox', [
	function() {
		return {
			templateUrl: 'modules/form/views/fields/textbox.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Textbox directive logic
			}
		};
	}
]);