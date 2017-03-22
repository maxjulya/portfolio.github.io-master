$(document).ready(function() {


    $(".carousel-eq, .carousel-brands").owlCarousel({
        loop:true,
        //nav: true,
        //navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
            },
            520:{
                items:1,
            },
            560:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:2,
            },
            1200:{
                items:2,
            }
        }
    });



    $('.mfp-gallery').each(function(){
        $(this).magnificPopup({
            delegate: 'a',
            mainClass: 'mfp-zoom-in',
            type: 'image',
            tLoading: '',
            gallery:{
                enabled: true,
            },
            removalDelay: 300,
            callbacks: {
                beforeChange: function() {
                    this.items[0].src = this.items[0].src + '?=' + Math.random();
                },
                open: function() {
                    $.magnificPopup.instance.next = function() {
                        var self = this;
                        self.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
                    }
                    $.magnificPopup.instance.prev = function() {
                        var self = this;
                        self.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
                    }
                },
                imageLoadComplete: function() {
                    var self = this;
                    setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
                }
            }
        });
    });


    $("#range_grid").mixItUp();

    $(".s_range li").click(function() {
        $(".s_range li").removeClass("active");
        $(this).addClass("active");
    });

    $(".portfolio-item").each(function(e) {

        var th = $(this);

        th.attr("href", "#portfolio-img-" + e)
            .find(".portfolio-popup")
             .attr("id", "portfolio-img-" + e);

    });

    $(".portfolio-item").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline',
    });

    $(".left .portfolio-item").animated("fadeInLeft", "fadeOutDown");
    $(".right .portfolio-item").animated("fadeInRight", "fadeOutDown");



    $(".s_novelty .novelty-item-content").equalHeights(); /// ? dla dotok ne srabotalo

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

    $(".left .price_item").animated("fadeInLeft", "fadeOutDown");
    $(".right .price_item").animated("fadeInRight", "fadeOutDown");


    function heightDetect(){
        $(".main_head").css("height", $(window).height())
    };

    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    $("input, select, textarea").jqBootstrapValidation();

    $(".top_mnu ul a").mPageScroll2id();

});

$(window).load(function() {
$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");

$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text p").animated("fadeInUp", "fadeOutDown");

});


