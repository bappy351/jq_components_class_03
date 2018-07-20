$(document).ready(function () {
    $("#details").click(function () {
        $(".anim").animate({
            width: "500px"
        });
        $(".anim").animate({
            height: "200px"
        });
    });

    $(".anim").mouseleave(function () {
        $(".anim").animate({
            width: "300px"
        });
        $(".anim").animate({
            height: "100px"
        });
    });



    $("#app").click(function () {
        $(".add_app").append(" <b>Today we learn Append Function.</b>");
    });
    $("#pre").click(function () {
        $(".add_pre").prepend(" <b>We all Know, </b>");
    });


    $("#dynamic_aff").click(function () {
        var label = prompt("Enter Label");
        var type = prompt("Enter Type");
        var name = prompt("Enter Name");
        if (label && type && name) {
            $(".adding").append("<p>" + label + ":" + " <input type='" + type + "' name='" + name + "' >" + "</p>");
        }

    });


    $(".each_btn").click(function () {
        $("li").each(function () {
            alert($(this).text())
        });
    });


    $("#content").load("../jquery/home.html");
    $("ul li a").click(function () {
        var page = $(this).attr("href");
        $("#content").load("../jquery/" + page + ".html");
        return false;
    });





});
