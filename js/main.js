$(document).ready(function () {
    $('.services-rightside__item__text').click(function () {
        $('.services-rightside__title').text($(this).text());
    });

    $('.prod-rightside__item').mouseover(function () {
        $(this).children().not('.prod-rightside__item__header').addClass('prod-rightside__item__active');
        $(this).addClass('prod-rightside__item__active-bg');
        $('.prod-rightside__item__header', this).css('background', 'none');
    });

    $('.prod-rightside__item').mouseleave(function () {
        $(this).children().not('.prod-rightside__item__header').removeClass('prod-rightside__item__active');
        $(this).removeClass('prod-rightside__item__active-bg');
        $('.prod-rightside__item__header', this).css('background', 'rgba(0, 0, 0, 0.5)');
    });
});