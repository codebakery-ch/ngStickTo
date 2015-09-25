.directive('stick-to', function ($window) {
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
                scope.inView = (scope.contain == 'true' ? this.pageYOffset >= parentOffset.top : true);

                //set css
                scrollElm.css('position', (scope.inView ? "absolute" : "relative"));
                scrollElm.css('top', (scope.inView ? this.pageYOffset - parentOffset.top + parseInt(scope.offset) : 0));
            });
        }
    }
})