/**
 * Created by Joeshu on 2017/9/24.
 * 全局公用js
 */

// 
$(function(){
    $(".nav").slide({ type:"menu", titCell:".nLi", targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});

    $(".txtMarquee-left").slide({mainCell:".notice-list",autoPlay:true,effect:"leftMarquee",vis:2,interTime:50});
    
    //
    $(".tab-box").slide({trigger:"click"});




    // lyc
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