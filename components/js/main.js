// ============================================  
// ============================================ MENU MOBILE
// ============================================ 
const handleMenu = () => {
    const burguerMneu = document.getElementById("hamburguer")
    const navMenu = document.getElementById("navBar")
    burguerMneu.addEventListener("click", () => {
        navMenu.classList.toggle("power")
    })
    navMenu.addEventListener("click", () => {
        navMenu.classList.remove("power")
    })

    window.ondblclick = () => {
        navMenu.classList.remove("power")
    }
}
handleMenu()

const run = document.getElementById("")



// ============================================  
// ============================================ CAROUSEL-ONE  -  PARTNERS
// ============================================ 
$(".carousel_one").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    pagination: true,
    autoplay: true,
    responsive: [{
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
const acc_btn = document.querySelectorAll('.accordion_info')
const acc_contents = document.querySelectorAll('.accordion_description')

acc_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        acc_contents.forEach((acc) => {
            if (e.target.nextElementSibling !== acc && acc.classList.contains('power')) {
                acc.classList.remove('power')
                acc_btn.forEach((btn) => btn.classList.remove('power'))
            }
        })
        const panel = btn.nextElementSibling
        panel.classList.toggle('power')
        btn.classList.toggle('power')
    })
})

window.onclick = (e) => {
    if (!e.target.matches('.accordion_info')) {
        acc_btn.forEach((btn) => btn.classList.remove('power'))
        acc_contents.forEach((acc) => acc.classList.remove('power'))
    }
}



// ============================================ 
// ============================================  BUTTON - SCROLL
// ============================================ 

window.addEventListener('scroll', function() {
    const scroll = this.document.querySelector('.button_scroll')
    scroll.classList.toggle('active', this.window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


// ============================================ 
// ============================================  ANIMATION / AND -- (SCROLL) | COMPONENTS
// ============================================ 

// const sr = ScrollReveal({
//     origin: 'top',
//     delay: 90,
//     distance: '24px',
//     duration: 1360,
//     easing: 'ease-in-out',
//     reset: true

// })

// // ============= HEADER
// sr.reveal('.header', { origin: 'left' })
// sr.reveal('.header_icons', { origin: 'top' })
// sr.reveal('.logo', { origin: 'bottom' })
// sr.reveal('#hamburguer', { origin: 'top' })
// sr.reveal('.banner_content', { origin: 'top' })
// sr.reveal('.header_institutional', { origin: 'left' })
// sr.reveal('.institutional_description', { origin: 'bottom' })

// // // ============= MAIN
// sr.reveal('.enterprise', { origin: 'left' })
// sr.reveal('.enterprise_content', { origin: 'left' })
// sr.reveal('.carousel ', { origin: 'left' })
// sr.reveal('.accordion', { origin: 'top' })
// sr.reveal('.doubts_whats ', { origin: 'top' })

// // // ============= FOOTER
// sr.reveal('.footer', { origin: 'left', reset: true })