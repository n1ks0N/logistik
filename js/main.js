$(document).ready(function () {
    $(".services-rightside__item__text").each((i, n) => {
        $(n).click(() => {
            $('.services-rightside__title').text($(n).text());
        });
    });
});