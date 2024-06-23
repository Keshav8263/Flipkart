var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 10,
    // freeMode: true,
    loop:true,
    mousewheel:true,
    keyboard:{
        enabled:true,
    },
    breakpoints: {
        375: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 9,
          spaceBetween: 0,
        },
      }
  });
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    // freeMode: true,
    loop:true,
    // mousewheel:true,
    // keyboard:{
    //     enabled:true,
    // },
    autoplay:{
      delay:1500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     375: {
    //       slidesPerView: 3,
    //       spaceBetween: 0,
    //     },
    //     1024: {
    //       slidesPerView: 9,
    //       spaceBetween: 0,
    //     },
    //   }
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 10,
    // freeMode: true,
    // loop:true,
    mousewheel:true,
    keyboard:{
        enabled:true,
    },
    // breakpoints: {
    //     375: {
    //       slidesPerView: 3,
    //       spaceBetween: 0,
    //     },
    //     1024: {
    //       slidesPerView: 9,
    //       spaceBetween: 0,
    //     },
    //   }
  });
