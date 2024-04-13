$(".card").hover(function () {
    $(this).children('p').removeClass("display-none");
    $(this).children('button').removeClass("display-none");
    $(this).children('img').addClass("display-none");
}, function () {
    $(this).children('p').addClass("display-none");
    $(this).children('button').addClass("display-none");
    $(this).children('img').removeClass("display-none");
})
function scrollDown() {
    window.scrollBy(0, 1200);
}