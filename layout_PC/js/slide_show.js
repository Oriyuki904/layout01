// (function ($) {
//     $.fn.thumbGallery = function (settings) {
//         var $this = $(this);
//         return this.each(function () {
//             settings = jQuery.extend({
//                 speed: 800,
//                 leftArrow: $this.find('#arrow-left'),
//                 rightArrow: $this.find('#arrow-right'),
//                 galleryContainer: $this.find('.gallery-inner'),
//                 visibleImagesSize: 4
//             }, settings);
//
//             var imgElements = settings.galleryContainer.find('img').length;
//             var size = settings.visibleImagesSize;
//
//             settings.leftArrow.hide();
//
//             if (imgElements > settings.visibleImagesSize) {
//                 settings.rightArrow.show();
//             } else {
//                 settings.rightArrow.hide();
//             }
//
//             function animateLeft() {
//                 var el = settings.galleryContainer.children(":last");
//
//                 settings.galleryContainer.animate({
//                         left: '+=' + el.outerWidth(true) + 'px'
//                     },
//                     settings.speed);
//             }
//
//             function animateRight() {
//                 var el = settings.galleryContainer.children(":first");
//                 settings.galleryContainer.animate({
//                         left: '-=' + el.outerWidth(true) + 'px'
//                     },
//                     settings.speed);
//             }
//
//             function checkArrows() {
//                 if (size === settings.visibleImagesSize) {
//                     settings.leftArrow.hide();
//                 } else {
//                     settings.leftArrow.show();
//                 }
//
//                 if (size === imgElements) {
//                     settings.rightArrow.hide();
//                 } else {
//                     settings.rightArrow.show();
//                 }
//             }
//
//             settings.leftArrow.click(function () {
//                 animateLeft();
//                 size--;
//                 checkArrows();
//             });
//
//             settings.rightArrow.click(function () {
//                 animateRight();
//                 size++;
//                 checkArrows();
//             });
//
//         });
//     };
// })(jQuery);
//
// $(document).ready(function () {
//     $('#gallery').thumbGallery();
// });

(function ($) {
    $.fn.thumbGallery = function (settings) {
        var $this = $(this);
        return this.each(function () {
            settings = jQuery.extend({
                speed: 800,
                leftArrow: $this.find('#arrow-left'),
                rightArrow: $this.find('#arrow-right'),
                galleryContainer: $this.find('.gallery-inner'),
                visibleImagesSize: 4
            }, settings);

            var imgElements = settings.galleryContainer.find('img').length;
            var size = settings.visibleImagesSize;

            settings.leftArrow.hide();

            if (imgElements > settings.visibleImagesSize) {
                settings.rightArrow.show();
            } else {
                settings.rightArrow.hide();
            }

            function animateLeft() {
                var el = settings.galleryContainer.children(":last");

                settings.galleryContainer.animate({
                        left: '+=' + el.outerWidth(true) + 'px'
                    },
                    settings.speed);
            }

            function animateRight() {
                var el = settings.galleryContainer.children(":first");
                settings.galleryContainer.animate({
                        left: '-=' + el.outerWidth(true) + 'px'
                    },
                    settings.speed);
            }

            function checkArrows() {
                if (size === settings.visibleImagesSize) {
                    settings.leftArrow.hide();
                } else {
                    settings.leftArrow.show();
                }

                if (size === imgElements) {
                    settings.rightArrow.hide();
                } else {
                    settings.rightArrow.show();
                }
            }

            settings.leftArrow.click(function () {
                animateLeft();
                size--;
                checkArrows();
            });

            settings.rightArrow.click(function () {
                animateRight();
                size++;
                checkArrows();
            });

        });
    };
})(jQuery);

$(document).ready(function () {
    $('#gallery').thumbGallery();
});