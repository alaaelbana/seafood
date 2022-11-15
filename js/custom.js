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
$('.single_product_page .products_filter_box .all_filter').click(function () {
    $('.single_product_page .product').fadeIn()
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