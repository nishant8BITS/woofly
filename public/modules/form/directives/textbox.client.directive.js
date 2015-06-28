'use strict';

angular.module('form').directive('textbox', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Textbox directive logic
				// ...

				element.text('this is the textbox directive');
			}
		};
	}
]);