$(document).ready(function () {
    $(window).on("scroll", showBackBtn);
    $(".scroll-to-top").on("click",backToTop)
    function showBackBtn() {
        if ($(this).scrollTop() > 600) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    }

    function backToTop() {
        $("body,html").animate({ scrollTop: 0},800);
    }
})