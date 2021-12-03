$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 1});
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Designer","Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Designer","Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// const more_btn = document.getElementById("more-btn");
// const more_text = document.getElementById("more-text");

// fumction readMore(btn,text){
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
// }

function readMore(){
    const btnMore = document.getElementById("more-btn");
const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnMore.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnMore.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}