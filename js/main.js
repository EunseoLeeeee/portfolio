$(document).ready(function () {



    $(".monthly_donut").hide();
    $(".donut").click(function () {
        $(".monthly_donut").fadeIn();
    });
    $(".md_close").click(function () {
        $(".monthly_donut").fadeOut();
    });


    $(".depth2").hide();
    $(".gnb>li").hover(function () {
        $(this).find(".depth2").stop().slideToggle();
    });


    const mb = new Swiper(".mb", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },



        autoplay: {
            delay: 4000,//슬라이드 대기시간 5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)  
        },
        speed: 1000, //슬라이드 넘어가는 속도 ms
        pagination: {
            el: ".swiper-pagination",
            type: "bullets", //버튼 종류 설정'bullets''fraction''progressbar'
            clickable: true,//버튼 클릭 여부
        },


    });




    const event_list = new Swiper('.event_list', {
        // Optional parameters


        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: 5.5,
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,

        },
    });


    const sns_list = new Swiper('.sns_list', {
        // Optional parameters


        autoplay: {
            delay: 1500,//슬라이드 대기시간 5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)  
        },
        loop: true,//반복여부 
        speed: 800, //슬라이드 넘어가는 속도 ms
        slidesPerView: 6.5,
        spaceBetween: 0,
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: false, //슬라이드를 드래그 했을때 보이는 여부  

        // },
    });

    $(".family_list").hide();
    $(".family").hover(function () {
        $(".family_list").fadeToggle();
    });

});