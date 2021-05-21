//Слайдер
$(function () {
  $('.top__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 1000,
    arrows: false,
    dots: true
  });

  $('.about__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="/Makxoot/images/arrow-left.svg" alt="arrows-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="/Makxoot/images/arrow-right.svg" alt="arrows-right">',
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});

//Табы
$(function () {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});

//Бургер
$(document).ready(function(){
  $(".burger").click(function(event){
      $(".burger").toggleClass("burger--active");
      $(".menu,.menu__list-item").toggleClass("active");
      $("body").toggleClass("lock");
  });
  $(".menu__list-item").click(function(event){
      $(".menu,.menu__item").removeClass("active");
      $(".burger--active").removeClass("burger--active");
      $("body").removeClass("lock");
  });
})

// document.querySelector('.burger').addEventListener('click', (e) => {
//   e.currentTarget.classList.toggle('burger--active');
// });