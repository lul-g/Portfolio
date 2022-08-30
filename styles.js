// TO DO
// 1. Make it responsive - 4hrs


// 6. make the contact page send receive sth and send it to me - MAKE IT A FORM THAT WORKS
// 7. Make the socials cooler and make em work

// 9.clean code up

// 11. edit home page, it dont make sense to have txt to the left without a reason
// 12. add a page to promote your friends 
// 13. find a better method to open two links 

//TDY TO DO
// 9 > 6




$(".navbar a").click(function() {
    $("a").css("border-color", "");
    $(this).css("border-color", "#cb2d3e");
})

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 50) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing-1", {
        strings: [
            "Programmer", "CS Student", 
            "Web Developer"
        ],
        typeSpeed: 40,
        backSpeed: 10,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Programmer", "CS Student", 
            "Web Developer"
        ],
        typeSpeed: 40,
        backSpeed: 10,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        navigation: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

let mixer = mixitup(".project-gallery", {
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500,
    },
});

// // form submitted message
// var submit = document.querySelector('#submit');

// submit.addEventListener('click', function (e) {
// // e.preventDefault();
// // document.getElementById('form').style.display = 'none';
// document.getElementById('form-submitted').style.display = 'block';
// });

// // back to form
// var form = document.querySelector('#back_to_form');
// form.addEventListener('click', function(f) {
//     document.getElementById('form').style.display = 'block';
//     document.getElementById('form-submitted').style.display = 'none';
// })


const prt_sec = document.querySelector(".projects");
const zooms = document.querySelectorAll(".zoom");
const modal_over = document.querySelector(".modal-overlay");
const imgs = document.querySelectorAll(".images img");
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");

let curr = 0;

zooms.forEach(icn =>
    icn.addEventListener("click", () => {
        prt_sec.classList.add("open");
        document.body.classList.add("stopScroll");
        changeImage(curr);
    })
);

modal_over.addEventListener("click", () => {
    prt_sec.classList.remove("open");
    document.body.classList.remove("stopScroll");
});


function changeImage(index) {
    imgs.forEach(img => img.classList.remove("showImage"));
    // console.log(imgs[index]);
    imgs[index].classList.add("showImage");
}


prev.addEventListener("click", () => {
    if (curr === 0) {
        curr = 5;
    } else {
        curr--;
    }
    changeImage(curr);

});

next.addEventListener("click", () => {
    if (curr === 5) {
        curr = 0;
    } else {
        curr++;
    }
    changeImage(curr);
});



// let s0 = document.querySelector(".s0");
// let sl0 = document.querySelector(".sl0");
// let l0 = document.querySelector(".l0");

// let s1 = document.querySelector(".s1");
// let sl1 = document.querySelector(".sl1");
// let l1 = document.querySelector(".l1");

// let s2 = document.querySelector(".s2");
// let sl2 = document.querySelector(".sl2");
// let l2 = document.querySelector(".l2");


// s0.addEventListener('mouseover', () => {
//     l0.style.color = "white";
//     sl0.style.borderColor = "transparent";
//     sl0.style.boxShadow = "none";
//     l0.style.transition = "all 1.17s";
// });
// s0.addEventListener('mouseout', () => {
//     l0.style.color = "black";
//     sl0.style.borderColor = "black";
//     sl0.style.boxShadow = "black";
//     l0.style.transition = "all .5s";
// });

// s1.addEventListener('mouseover', () => {
//     l1.style.color = "white";
//     sl1.style.borderColor = "transparent";
//     sl1.style.boxShadow = "none";
//     l1.style.transition = "all 1.1s";
// });
// s1.addEventListener('mouseout', () => {
//     l1.style.color = "black";
//     sl1.style.borderColor = "black";
//     sl1.style.boxShadow = "black";
//     l1.style.transition = "all .5s";
// });

// s2.addEventListener('mouseover', () => {
//     l2.style.color = "white";
//     sl2.style.borderColor = "transparent";
//     sl2.style.boxShadow = "none";
//     l2.style.transition = "all 1.17s";
// });
// s2.addEventListener('mouseout', () => {
//     l2.style.color = "black";
//     sl2.style.borderColor = "black";
//     sl2.style.boxShadow = "black";
//     l2.style.transition = "all .5s";
// });

