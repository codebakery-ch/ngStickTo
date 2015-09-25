.directive('sticky', function ($window) {
    return {
        restrict: 'A',
        scope: {
            contain: '@',
            offset: '@'
        },
        link: function (scope, element, attr) {
            //vars
            var scrollElm = $(element);
            var parent = $(element).parent('div');
            var parentOffset = parent.offset();

            //set Parent relative
            parent.css('position', 'relative');

            //bind scroll
            angular.element($window).bind("scroll", function () {

                //check if in viewport
                if (scope.contain == 'true') {
                    scope.inView = this.pageYOffset >= parentOffset.top;
                } else {
                    scope.inView = true;
                }
                if (scope.inView) {
                    scrollElm.css('position', 'absolute');
                    scrollElm.css('top', this.pageYOffset - parentOffset.top + parseInt( scope.offset));
                }
            });
        }
    }
})