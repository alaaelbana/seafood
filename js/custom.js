new WOW().init();
new Splide('.splide', {
    type: 'loop',
    autoplay: true,

}).mount();
$(window).scroll(function () {
    if ($(window).scrollTop() > $(".products_cover").offset().top - 65) {
        $('header').removeClass('home_header')
    } else {
        $('header').addClass('home_header')
    }
    if ($(window).scrollTop() > $(".about_us_box").offset().top) {
        $('header').addClass('header')
    } else {
        $('header').removeClass('header')
    }

});
$('.menu_btn').click(function () {
    $('header').toggleClass('home_header_hide')
    $('.header_links').toggleClass('show');
    $('.cover').fadeToggle('');
})
$('.cover').click(function () {
    $('.header_links').removeClass('show');
    $('.cover').fadeOut('');
})

$('.products_cover .products_filter_box .filter').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// كود زراير الفلاتر تقدر تشيله وتعملها من عندك 
$('.products_filter_box .filter').click(function () {
    $('.product').addClass('visible')
    $('.product').hide()
})
$('.products_filter_box .all_filter').click(function () {
    $('.product:nth-child(-n+9)').fadeIn()
})
$('.products_filter_box .fish_filter').click(function () {
    $('.fish').fadeIn()
})
$('.products_filter_box .soup_filter').click(function () {
    $('.soup').fadeIn()
})
$('.products_filter_box .macaroni_filter').click(function () {
    $('.macaroni').fadeIn()
})
$('.products_filter_box .sandwich_filter').click(function () {
    $('.sandwich').fadeIn()
})






popup = {
    init: function () {
        $('.gallery_img').click(function () {
            popup.open($(this));
        });

        $(document).on('click', '.popup img', function () {
            return false;
        }).on('click', '.popup', function () {
            popup.close();
        });
    },
    open: function ($figure) {
        $('.gallery').addClass('pop');
        $popup = $('<div class=popup />').appendTo($('body'));
        $fig = $figure.clone().appendTo($('.popup'));
        $bg = $('<div class=bg />').appendTo($('.popup'));
        $close = $(`
        <div class=close>
            <svg height="42" viewBox="0 0 48 48" width="42">
                <path
                    d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
                <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
        </div>`).appendTo($fig);
        $shadow = $('<div class=shadow />').appendTo($fig);
        src = $('img', $fig).attr('src');
        $shadow.css({
            backgroundImage: 'url(' + src + ')'
        });
        $bg.css({
            backgroundImage: 'url(' + src + ')'
        });
        setTimeout(function () {
            $('.popup').addClass('pop');
        }, 10);
    },
    close: function () {
        $('.gallery, .popup').removeClass('pop');
        setTimeout(function () {
            $('.popup').remove();
        }, 100);
    }
};
popup.init();