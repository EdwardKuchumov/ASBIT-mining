// ==================================================burger-toggle
const burgerBtn = document.querySelector(".header__burger");
const burgerHrest = document.querySelector(".header__burger-link");
const modalBurger = document.querySelector(".header__burger-modal");
burgerBtn.addEventListener("click", function () {
  modalBurger.classList.toggle("toggle");
  if (modalBurger.classList.contains("toggle")) {
    burgerHrest.classList.remove("active");
  } else {
    burgerHrest.classList.add("active");
  }
});
// ==================================================Slider-Swiper
const swiper = new Swiper('.swiper-asic', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
    // And if we need scrollbar

  });
// accrodion
const plusButton = document.querySelectorAll('.faq__item');
plusButton.forEach(function(item){
  item.addEventListener('click', function(){
    item.querySelector('.span').classList.toggle('hiddens')
    item.querySelector('.faq__plus-block').classList.toggle('rotate')
  })
})


