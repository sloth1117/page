$(document).ready(function(){

  // header nav
  $(".btnBox .btn_close").hide();
  $(".btnBox .btn_open").click(function(){
    $(".btnBox .btn_close").show();
    $("nav").slideDown();
    $(".navbg").show();
  });
  $(".btnBox .btn_close").click(function(){
    $(".navbg").hide();
    $("nav").fadeOut(200);
    $(".btnBox .btn_close").hide();
  });
  $(".navbg").click(function(){
    $(".navbg").hide();
    $("nav").fadeOut(200);
    $(".btnBox .btn_close").hide();
  });

  var ww = $(window).width();
  $("nav").mouseover(function(){
    if(ww > 1280){
      $("nav").siblings(".navbg").stop().slideDown(300);
      $("nav .subMenu").stop().slideDown(300);
    }
  });
  $("nav").mouseout(function(){
    if(ww > 1280){
      $("nav .subMenu").stop().fadeOut(300);
      $("nav").siblings(".navbg").stop().slideUp();
    }
  });

  
  // section.review
  var swiper1 = new Swiper(".mySwiper_rv", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 360px
      360: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 650px
      650: {
        slidesPerView: 2,
        spaceBetween: 20
      },
       // when window width is >= 720px
       720: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
       // when window width is >= 900px
       900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    // navigation: {
    //   nextEl: ".mySwiper_rv .swiper-button-next",
    //   prevEl: ".mySwiper_rv .swiper-button-prev",
    // },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });


  $(".travel .trv_more").click(function(){
    event.preventDefault();
    $(".trv_wrap .more_view").css("display","flex");
    $(".travel .trv_more").hide();
  });


  // section.recommend
  var swiper2 = new Swiper(".mySwiper_re", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });
  
  
}); // 끝