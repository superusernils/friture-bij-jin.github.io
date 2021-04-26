
$(document).ready(function(){

    // aos (animate on scroll)
    AOS.init();
    AOS.init({disable: 'mobile'});

    // navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });

    // navbar background change in scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 80){
            $('.navbar').addClass('bg-navbar');
        } else {
            $('.navbar').removeClass('bg-navbar');
        }
    });

    // smooth scroll
    let links = $('.navbar-nav a.nav-link');
    links.click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700);
    });


    // popup gallery 
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return '<small>Foto gemaakt door Baoer</small>';
                }
            }
        });
    });

});