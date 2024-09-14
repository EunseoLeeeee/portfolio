$(document).ready(function(){



    $('#fullpage').fullpage({
        // FullPage.js options
        anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['INTRO', 'ABOUT ME', 'SKILL', 'WEB', 'GRAPHIC', 'APILOGUE'],
        showActiveTooltip: true,
        responsiveWidth: 1024, // 반응형 옵션 1024 이하에서 기본 스크롤
        autoScrolling: true,
        scrollHorizontally: true,
    
        // 이벤트 핸들러
        onLeave: function (origin, destination, direction, trigger) {
            // 구역 7 도착 시 네비게이션 숨기기
            if (destination.index === 6) { // destination.index는 0부터 시작
                $("#fp-nav").fadeOut();
            } else {
                $("#fp-nav").fadeIn();
            }
    
            // AOS 애니메이션 클래스 제거
            $('.section [data-aos]').each(function () {
                $(this).removeClass("aos-animate");
            });
        },
    
        onSlideLeave: function (section, origin, destination, direction) {
            // 슬라이드가 떠날 때 AOS 애니메이션 클래스 제거
            $('.slide [data-aos]').each(function () {
                $(this).removeClass("aos-animate");
            });
        },
    
        afterLoad: function (origin, destination, direction) {
            // 섹션이 로드된 후 AOS 애니메이션 클래스 추가
            $('.section.active [data-aos]').each(function () {
                $(this).addClass("aos-animate");
            });
        },
    
        afterSlideLoad: function (section, origin, destination, direction) {
            // 슬라이드가 로드된 후 AOS 애니메이션 클래스 추가
            $('.slide.active [data-aos]').each(function () {
                $(this).addClass("aos-animate");
            });
        }
    });
     




  const film = new Swiper(".film", {



    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: false,
    loop: false,
    slidesPerView: 2.5,
    spaceBetween: 30,

    
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable:true,
       
    },

    // breakpoints: {
    //      768: {
    //          slidesPerView: 2.5,
    //          spaceBetween: 40,
    //     },
    //      1200: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //      },
    // },




 });



 

 $('.depth2').hide();
 $('.gnb>li').hover(function(){
    $(this).find('.depth2').stop().slideToggle();
 });


 $('.contact_pop').hide();
 $('#about .contact_btn').click(function(){
    $('#about .contact_pop').fadeIn();

 });
 $('#about .close').click(function(){
    $('#about .contact_pop').fadeOut();

 });

 $('#epilogue .contact_btn').click(function(){
    $('#epilogue .contact_pop').fadeIn();

 });
 $('#epilogue .close').click(function(){
    $('#epilogue .contact_pop').fadeOut();

});


 



});