// mobile menu
function openNav(){
    document.getElementById("sidenav").style.width="50%";
};
function closeNav(){
    document.getElementById("sidenav").style.width="0%";
};

$(document).ready(function(){
    // 1st card
    $(".js--glob-btn_1").hide();
    $(".js_blog-card_1").mouseenter(function(){
        $(".js--glob-btn_1").show();
    });
    $(".js_blog-card_1").mouseleave(function(){
        $(".js--glob-btn_1").hide();
    });
    // 2nd card
    $(".js--glob-btn_2").hide();
    $(".js_blog-card_2").mouseenter(function(){
        $(".js--glob-btn_2").show();
    });
    $(".js_blog-card_2").mouseleave(function(){
        $(".js--glob-btn_2").hide();
    });
    // 4th card
    $(".js--glob-btn_3").hide();
    $(".js_blog-card_3").mouseenter(function(){
        $(".js--glob-btn_3").show();
    });
    $(".js_blog-card_3").mouseleave(function(){
        $(".js--glob-btn_3").hide();
    });
    // 5th card
    $(".js--glob-btn_4").hide();
    $(".js_blog-card_4").mouseenter(function(){
        $(".js--glob-btn_4").show();
    });
    $(".js_blog-card_4").mouseleave(function(){
        $(".js--glob-btn_4").hide();
    });

    // stiky Menu
    $(".js-stikey-menu").waypoint(function(direction){
        if(direction == "down"){
            $(".header-section").addClass("stikey");
        }else{
            $(".header-section").removeClass("stikey");
        };
    });

    // smooth scroll sfari
    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top},200,
                function(){
                    window.location.hash = hash;
                }
            );
        };
    });
});

