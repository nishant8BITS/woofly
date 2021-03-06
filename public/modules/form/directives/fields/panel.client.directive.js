'use strict';

angular.module('form').directive('panel', ['Uuid',
	function(Uuid) {
		return {
			scope : {
				setting: '='
			},
			replace: true,
			templateUrl: 'modules/form/views/fields/panel.view.html',
			restrict: 'AE',
			link: function postLink(scope, element, attrs) {
				var id = Uuid.new();
                angular.element(element).attr('id', id);
			}
		};
	}
]);