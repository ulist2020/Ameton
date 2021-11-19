var slideCount = $('.questions__list').children().length;
var slideNow = 1;
var butn = $(".questions__but");
var gap = 24;

$(document).ready(function() {
    $('.questions__but').click(function() {
        nextSlide();
    });

 });

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > 4) {
        $('.questions__card').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = (-$('.questions__card').width() * (slideNow)) - gap;
        $('.questions__card').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

