document.addEventListener('DOMContentLoaded', function(e) {
  yall();
  AOS.init({ duration: 1000 });
})

$(document).ready(function(){

  //language switcher function
  $('.switch-theme a').on('click', function() {
    $('.switch-theme a').removeClass('active');
    $(this).toggleClass('active');
  });


  //Timeline list active function
  // $('.wrapshareblock a').on('click', function() {
  //   $('.wrap-share').toggle();
  // });


  //Share button toggle
  $('.timeline-list a').on('click', function() {
    $('.timeline-list a').removeClass('active');
    $(this).toggleClass('active');
  });


  //click to navigate ID
  $("#skip-main-header").click(function() {
      $('html, body').animate({
          scrollTop: $("#header-btm").offset().top
      }, 1000);
  });
  $("#skip-main-content").click(function() {
      $('html, body').animate({
          scrollTop: $("#main-content").offset().top
      }, 1000);
  });


  //On body click hide
  $('body').on("click", function(event) {
      //alert("hi"); 
      if (!$(event.target).closest('.wrapshareblock').length) {
          $(".wrap-share").hide();
      }else {
        $('.wrap-share').toggle();
      }   
      
  });


  //Mobile menu open/close
  if ($(window).width() <= 992) {
   
    $(".mobile-menu").on("click", "a", function () {
        $(".close-menu").show();
        $(".nav-menu").toggleClass("open");
    });
    $(".nav-menu").on("click", ".close-menu", function () {
        $(this).hide();
        $(".nav-menu").toggleClass("open");
    });

    $(".nav-menu").on("click", "li i", function (event) {
        // event.preventDefault();
        $(this).children("ul").toggleClass("open");
    });

}


  //client slider 
  $('.investor-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
  ]

  });



  //Animattion on scroll
  // function reveal() {
  //   var reveals = document.querySelectorAll(".reveal");  
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;
  
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //   }
  // }
  
  // window.addEventListener("scroll", reveal);




  //Modal Js
  let modal = $("#modal"),
        artistModal = $("#artistModal");
  // modal.addClass('active')
    /*$("body").on('click', '.modal-trigger', function(event) {
        event.preventDefault();
        modal.addClass('active');
        $("body").css({ overflow: 'hidden' });
        let fullimg = $(this).data('img');
        let imgCap = $(this).data('cap');
        // console.log(fullimg)
        modal.find('#modalImg').attr('src', fullimg);
        modal.find('#model-cap').html(imgCap);
    });*/

    /*$("body").on('click', '.know', function(event) {
        event.preventDefault();
        artistModal.addClass('active');
        $("body").css({ overflow: 'hidden' })
    });*/

    /*$("body").on('click', '.modal-close, .modal-overlay', function(event) {
        event.preventDefault();
        $(".modal").removeClass('active')
        $("body").css({ overflow: 'auto' })
    });*/




})


