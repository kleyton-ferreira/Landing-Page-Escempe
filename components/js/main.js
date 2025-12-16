// ============================================
// ============================================ MENU MOBILE
// ============================================
let $page = $(".page");
$(".menu-toggle").on("click", function () {
  $page.toggleClass("power");
});

$(".navItens").on("click", function () {
  $page.toggleClass("power");
});

$(".navItens").on("click", function () {
  $page.removeClass("power");
});

// ============================================
// ============================================ CAROUSEL-ONE
// ============================================
$(".carousel_one").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  pagination: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});

// ============================================
// ============================================  ACCORDION
// ============================================
const acc_btn = document.querySelectorAll(".accordion_info");
const acc_contents = document.querySelectorAll(".accordion_description");

acc_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("power")
      ) {
        acc.classList.remove("power");
        acc_btn.forEach((btn) => btn.classList.remove("power"));
      }
    });
    const panel = btn.nextElementSibling;
    panel.classList.toggle("power");
    btn.classList.toggle("power");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion_info")) {
    acc_btn.forEach((btn) => btn.classList.remove("power"));
    acc_contents.forEach((acc) => acc.classList.remove("power"));
  }
};

// ============================================
// ============================================  BUTTON - SCROLL
// ============================================

window.addEventListener("scroll", function () {
  const scroll = this.document.querySelector(".button_scroll");
  scroll.classList.toggle("active", this.window.scrollY > 450);
});

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
