(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-57144931-1', {
    'cookieDomain': 'none'
});
ga('send', 'pageview');


$(function () {

    $.get("https://inter-high-access-count.herokuapp.com/access?path=" + location.pathname, function (res) {

        if (res.playcount) $("#playcount_num").text(res.playcount)
        if (res.like) $("#like_game_num > span").text(res.like)
    })

    $.get("./info.txt", function (res) {
        $("#info").html(marked(res))
    })

    $(".btn_good").on("click", function () {
        ga('send', 'event', 'like_game', 'click', location.pathname)
        $(this).attr("clicked", "true")
        var count = parseInt($("#like_game_num > span").text()) + 1;
        $("#like_game_num > span").text(count)

        $(".btn_good").off("click");
    })

    $('a img.normal').hover(function () {
        $(this).attr('src', "./img/btnGoodHOVER.png")

    }, function () {
        $(this).attr('src', "./img/btnGood.png")
    })
})

