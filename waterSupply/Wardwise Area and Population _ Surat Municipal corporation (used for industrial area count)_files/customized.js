//$(document).on("ready",function(){$("#element").introLoader({animation:{name:"gifLoader",options:{ease:"easeInOutCirc",style:"dark bubble",delayBefore:0,delayAfter:0,exitTime:1e3,preventScroll:!1}}})}),function(){function e(){window.addEventListener("scroll",function(){l||(l=!0,setTimeout(t,250))},!1)}function t(){var e=o();e>=a?($(".topbar").slideUp(400),$("header").addClass("fixed-header"),$(".fixed-inner-header").fadeIn("slow"),$("body").attr({"data-spy":"scroll","data-target":"#innermenu","data-offset":"140"})):($(".topbar").slideDown(400),$("header").removeClass("fixed-header"),$(".fixed-inner-header").fadeOut("slow")),l=!1}function o(){return window.pageYOffset||n.scrollTop}var n=document.documentElement,l=!1,a=200;document.querySelector("header"),e()}(),$('[data-spy="scroll"]').each(function(){$(this).scrollspy("refresh")});var offset=200,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?$(".backtotop-wrapper").fadeIn(400):($(".backtotop-wrapper").fadeOut(400),$(".topbar").fadeIn(400))}),$(window).scroll(function(){$(this).scrollTop()>600&&$("#left-panel-hidden").css({display:"block",position:"fixed"})}),$("#left-panel a").on("click",function(){}),$(".back-to-top").click(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},600),!1}),$("#onlineservicesbutton").click(function(){$("#onlineservicesblock").hasClass("closed")?($("#onlineservicesblock").animate({right:-2},1e3),$("#onlineservicesblock").addClass("opened"),$("#onlineservicesblock").removeClass("closed")):$("#onlineservicesblock").hasClass("opened")&&($("#onlineservicesblock").animate({right:-260},1e3),$("#onlineservicesblock").addClass("closed"),$("#onlineservicesblock").removeClass("opened"))}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$("#close-left-panel").click(function(){$("#left-panel").hasClass("closed")?($("#right-panel").removeClass("col-lg-12"),$("#right-panel").addClass("col-lg-9"),$("#left-panel").removeClass("closed"),$("#left-panel").removeClass("hidden closed"),$("#left-panel").addClass("opened"),$("#close-left-panel").text("← Hide left panel")):$("#left-panel").hasClass("opened")&&($("#right-panel").removeClass("col-lg-9"),$("#right-panel").addClass("col-lg-12"),$("#left-panel").removeClass("opened"),$("#left-panel").addClass("hidden closed"),$("#close-left-panel").text("Show left panel →"),$(".right-icon").css("display","block"))}),$("#fontincrease").on("click",function(){return $("body").css("font-size","15px"),$("#fontincrease").addClass("selected"),$("#fontdecrease").removeClass("selected"),$("#fontdefault").removeClass("selected"),!1}),$("#fontdefault").on("click",function(){return $("body").css("font-size","14px"),$("#fontincrease").removeClass("selected"),$("#fontdecrease").removeClass("selected"),$("#fontdefault").addClass("selected"),!1}),$("#fontdecrease").on("click",function(){return $("body").css("font-size","13px"),$("#fontincrease").removeClass("selected"),$("#fontdecrease").addClass("selected"),$("#fontdefault").removeClass("selected"),!1}),$("#radioBtn a").on("click",function(){var e=$(this).data("title"),t=$(this).data("toggle");$("#"+t).prop("value",e),$('a[data-toggle="'+t+'"]').not('[data-title="'+e+'"]').removeClass("active").addClass("notActive"),$('a[data-toggle="'+t+'"][data-title="'+e+'"]').removeClass("notActive").addClass("active"),"N"==$("#ContentLanguage").val()?($(".English-contents").fadeOut(),$(".Gujarati-contents").fadeIn()):($(".English-contents").fadeIn(),$(".Gujarati-contents").fadeOut())}),$("#loadmoretimeline").on("click",function(){return $("#hiddentimeline").slideToggle(3e3,function(){$("#loadmoretimeline").html('<i class="fa fa-angle-down"></i> Load More..'==$("#loadmoretimeline").html()?'<i class="fa fa-angle-up"></i> Show Less..':'<i class="fa fa-angle-down"></i> Load More..')}),!1}),$(document).ready(function(){var e=window.location.hash;""!=e&&$("body, html").animate({scrollTop:$($(e)).offset().top-90},600)}),$("#left-panel li a").on("click",function(){if($(this).attr("href").includes(".pdf")||$(this).attr("target"));else{window.location=$(this).attr("href"),linkwithlocation=$(this).attr("href"),linkwithlocation=window.location.host+linkwithlocation.substr(0,linkwithlocation.indexOf("#")),currentlocation=window.location.toString(),len=window.location.toString().length-window.location.hash.toString().length,currentlocation=currentlocation.substr(0,len);var e=window.location.hash;if("http://"+linkwithlocation==currentlocation||"https://"+linkwithlocation==currentlocation){var e=window.location.hash;""!=e&&$("body, html").animate({scrollTop:$($(e)).offset().top-90},10)}}}),$("#allzones li a").on("click",function(){if($(this).attr("href").includes(".pdf")||$(this).attr("target"));else{window.location=$(this).attr("href"),linkwithlocation=$(this).attr("href"),linkwithlocation=window.location.host+linkwithlocation.substr(0,linkwithlocation.indexOf("#")),currentlocation=window.location.toString(),len=window.location.toString().length-window.location.hash.toString().length,currentlocation=currentlocation.substr(0,len);var e=window.location.hash;if("http://"+linkwithlocation==currentlocation||"https://"+linkwithlocation==currentlocation){var e=window.location.hash;""!=e&&$("body, html").animate({scrollTop:$($(e)).offset().top-90},10)}}}),$("#innermenu li a").on("click",function(){var e=$(this).attr("href");""!=e&&$("body, html").animate({scrollTop:$($(e)).offset().top-120},600)}),$(".collapsible-panels-wrapper a").on("click",function(){var e=$(this);e.hasClass("collapsed")?(e.removeClass("collapsed").addClass("active"),e.find("i").removeClass("fa-plus-circle").addClass("fa-minus-circle")):(e.addClass("collapsed").removeClass("active"),e.find("i").removeClass("fa-minus-circle").addClass("fa-plus-circle"))});
$(document).on("ready", function () {
    $("#element").introLoader({
        animation: {
            name: "gifLoader",
            options: {
                ease: "easeInOutCirc",
                style: "dark bubble",
                delayBefore: 0,
                delayAfter: 0,
                exitTime: 1e3,
                preventScroll: !1
            }
        }
    })
}),
    function () {
        function e() {
            window.addEventListener("scroll", function () {
                l || (l = !0, setTimeout(t, 250))
            }, !1)
        }

        function t() {
            var e = o();
            e >= a ? ($(".topbar").slideUp(400), $("header").addClass("fixed-header"), $(".fixed-inner-header").fadeIn("slow"), $("body").attr({
                "data-spy": "scroll",
                "data-target": "#innermenu",
                "data-offset": "140"
            })) : ($(".topbar").slideDown(400), $("header").removeClass("fixed-header"), $(".fixed-inner-header").fadeOut("slow")), l = !1
        }

        function o() {
            return window.pageYOffset || n.scrollTop
        }
        var n = document.documentElement,
            l = !1,
            a = 200;
        document.querySelector("header"), e()
    }(), $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy("refresh")
    });
var offset = 200,
    duration = 500;
$(window).scroll(function () {
    $(this).scrollTop() > offset ? $(".backtotop-wrapper").fadeIn(400) : ($(".backtotop-wrapper").fadeOut(400), $(".topbar").fadeIn(400))
}), $(window).scroll(function () {
    $(this).scrollTop() > 600 && $("#left-panel-hidden").css({
        display: "block",
        position: "fixed"
    })
}), $("#left-panel a").on("click", function () { }), $(".back-to-top").click(function (e) {
    return e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, 600), !1
}), $("#onlineservicesbutton").click(function () {
    $("#onlineservicesblock").hasClass("closed") ? ($("#onlineservicesblock").animate({
        right: -2
    }, 1e3), $("#onlineservicesblock").addClass("opened"), $("#onlineservicesblock").removeClass("closed")) : $("#onlineservicesblock").hasClass("opened") && ($("#onlineservicesblock").animate({
        right: -260
    }, 1e3), $("#onlineservicesblock").addClass("closed"), $("#onlineservicesblock").removeClass("opened"))
}), $(function () {
    $('[data-toggle="tooltip"]').tooltip()
}), $("#close-left-panel").click(function () {
    $("#left-panel").hasClass("closed") ? ($("#right-panel").removeClass("col-lg-12"), $("#right-panel").addClass("col-lg-9"), $("#left-panel").removeClass("closed"), $("#left-panel").removeClass("hidden closed"), $("#left-panel").addClass("opened"), $("#close-left-panel").text("← Hide left panel")) : $("#left-panel").hasClass("opened") && ($("#right-panel").removeClass("col-lg-9"), $("#right-panel").addClass("col-lg-12"), $("#left-panel").removeClass("opened"), $("#left-panel").addClass("hidden closed"), $("#close-left-panel").text("Show left panel →"), $(".right-icon").css("display", "block"))
}), $("#fontincrease").on("click", function () {
    return $("body").css("font-size", "15px"), $("#fontincrease").addClass("selected"), $("#fontdecrease").removeClass("selected"), $("#fontdefault").removeClass("selected"), !1
}), $("#fontdefault").on("click", function () {
    return $("body").css("font-size", "14px"), $("#fontincrease").removeClass("selected"), $("#fontdecrease").removeClass("selected"), $("#fontdefault").addClass("selected"), !1
}), $("#fontdecrease").on("click", function () {
    return $("body").css("font-size", "13px"), $("#fontincrease").removeClass("selected"), $("#fontdecrease").addClass("selected"), $("#fontdefault").removeClass("selected"), !1
}), $("#radioBtn a").on("click", function () {
    var e = $(this).data("title"),
        t = $(this).data("toggle");
    $("#" + t).prop("value", e), $('a[data-toggle="' + t + '"]').not('[data-title="' + e + '"]').removeClass("active").addClass("notActive"), $('a[data-toggle="' + t + '"][data-title="' + e + '"]').removeClass("notActive").addClass("active"), "N" == $("#ContentLanguage").val() ? ($(".English-contents").fadeOut(), $(".Gujarati-contents").fadeIn()) : ($(".English-contents").fadeIn(), $(".Gujarati-contents").fadeOut())
}), $("#loadmoretimeline").on("click", function () {
    return $("#hiddentimeline").slideToggle(3e3, function () {
        $("#loadmoretimeline").html('<i class="fa fa-angle-down"></i> Load More..' == $("#loadmoretimeline").html() ? '<i class="fa fa-angle-up"></i> Show Less..' : '<i class="fa fa-angle-down"></i> Load More..')
    }), !1
}), $(document).ready(function () {
    var e = window.location.hash;
    "" != e && $("body, html").animate({
        scrollTop: $($(e)).offset().top - 90
    }, 600)
}), $("#left-panel li a").on("click", function () {
    if ($(this).attr("href").includes(".pdf") || $(this).attr("target"));
    else {
        window.location = $(this).attr("href"), linkwithlocation = $(this).attr("href"), linkwithlocation = window.location.host + linkwithlocation.substr(0, linkwithlocation.indexOf("#")), currentlocation = window.location.toString(), len = window.location.toString().length - window.location.hash.toString().length, currentlocation = currentlocation.substr(0, len);
        var e = window.location.hash;
        if ("http://" + linkwithlocation == currentlocation || "https://" + linkwithlocation == currentlocation) {
            var e = window.location.hash;
            "" != e && $("body, html").animate({
                scrollTop: $($(e)).offset().top - 90
            }, 10)
        }
    }
}), $("#allzones li a").on("click", function () {
    if ($(this).attr("href").includes(".pdf") || $(this).attr("target"));
    else {
        window.location = $(this).attr("href"), linkwithlocation = $(this).attr("href"), linkwithlocation = window.location.host + linkwithlocation.substr(0, linkwithlocation.indexOf("#")), currentlocation = window.location.toString(), len = window.location.toString().length - window.location.hash.toString().length, currentlocation = currentlocation.substr(0, len);
        var e = window.location.hash;
        if ("http://" + linkwithlocation == currentlocation || "https://" + linkwithlocation == currentlocation) {
            var e = window.location.hash;
            "" != e && $("body, html").animate({
                scrollTop: $($(e)).offset().top - 90
            }, 10)
        }
    }
}),
$(".bookmark li a").on("click", function () {
    if ($(this).attr("href").includes(".pdf") || $(this).attr("target"));
    else {
        window.location = $(this).attr("href"), linkwithlocation = $(this).attr("href"), linkwithlocation = window.location.host + linkwithlocation.substr(0, linkwithlocation.indexOf("#")), currentlocation = window.location.toString(), len = window.location.toString().length - window.location.hash.toString().length, currentlocation = currentlocation.substr(0, len);
        var e = window.location.hash;
        if ("http://" + linkwithlocation == currentlocation || "https://" + linkwithlocation == currentlocation) {
            var e = window.location.hash;
            "" != e && $("body, html").animate({
                scrollTop: $($(e)).offset().top - 90
            }, 10)
        }
    }
}),$("#innermenu li a").on("click", function () {
    var e = $(this).attr("href");
    "" != e && $("body, html").animate({
        scrollTop: $($(e)).offset().top - 120
    }, 600)
}), $(".collapsible-panels-wrapper a").on("click", function () {
    var e = $(this);
    e.hasClass("collapsed") ? (e.removeClass("collapsed").addClass("active"), e.find("i").removeClass("fa-plus-circle").addClass("fa-minus-circle")) : (e.addClass("collapsed").removeClass("active"), e.find("i").removeClass("fa-minus-circle").addClass("fa-plus-circle"))
});
$("a.btn-collansible").on("click", function () {
    var e = $("#complaintinfomrationbtn");
    //alert(e);
    e.hasClass("collapsed") ? (e.removeClass("collapsed").addClass("active"), e.find("i").removeClass("fa-plus-circle").addClass("fa-minus-circle")) : (e.addClass("collapsed").removeClass("active"), e.find("i").removeClass("fa-minus-circle").addClass("fa-plus-circle"))
    $("#personalinfomrationbtn").removeClass("collapsed");
    $("#personalinfomrationbtn i").addClass("fa-minus-circle");
    $("#personalinformation").addClass("in");
    $("#personalinformation").attr("aria-expanded", "true");
});