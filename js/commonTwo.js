/**
 * Created by admin on 2017/9/29.
 */
$(function() {
    $(".per-tab-box").slide({trigger: "click"});
    $(".per-tab-ul").find("li").click(function () {
        $(".per-tab-ul").find("li").removeClass("str");
        $(this).addClass("str");
    });
    $("#close").click(function () {

        $(".profile-hide").addClass("hide");
        $(".profile").removeClass("hide");
        $(".profile").addClass("show");

    });
    $("#open").click(function () {
        $(".profile-hide").removeClass("hide");
        $(".profile-hide").addClass("show");
        $(".profile").addClass("hide");
    });
})
