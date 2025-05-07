var yOffset = $(".mobileHeaderSearchBox").offset().top;
$(window).scroll(function() {
    if ($(window).scrollTop() > yOffset) {
        $(".mobileHeaderSearchBox").css({
            'top': 0,
        });
    } else {
        $(".mobileHeaderSearchBox").css({
            'top': yOffset + 'px',
        });
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$(document).ready(function () {
    $("#listLocationOpener").click(function () {
        $("#listAllLocation").modal("show");
    });    
});

$('.collapse').collapse()

const swiper = new Swiper('.swiper', {
    spaceBetween:10,
    slidesPerView:"auto",
    freeMode: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$('.carousel').carousel()

function closeMobHeaderApp() {
    var C = document.getElementById("mobileheader");
    C.style.display = "none";
}

$(document).ready(function(){
    $("#listLocationOpener").click(function(){
        $("#provinces").show();
    });
});

$(document).ready(function(){
    $("#cityOfProvinceItem1").hide();
});
$(document).ready(function(){
    $("#provinceItem1").click(function(){
        $("#provinces").hide();
    });
});
$(document).ready(function(){
    $("#provinceItem1").click(function(){
        $("#cityOfProvinceItem1").show();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu1").click(function(){
        $("#cityOfProvinceItem1").hide();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu1").click(function(){
        $("#provinces").show();
    });
});

$(document).ready(function(){
    $("#cityOfProvinceItem2").hide();
});
$(document).ready(function(){
    $("#provinceItem2").click(function(){
        $("#provinces").hide();
    });
});
$(document).ready(function(){
    $("#provinceItem2").click(function(){
        $("#cityOfProvinceItem2").show();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu2").click(function(){
        $("#cityOfProvinceItem2").hide();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu2").click(function(){
        $("#provinces").show();
    });
});

$(document).ready(function(){
    $("#cityOfProvinceItem3").hide();
});
$(document).ready(function(){
    $("#provinceItem3").click(function(){
        $("#provinces").hide();
    });
});
$(document).ready(function(){
    $("#provinceItem3").click(function(){
        $("#cityOfProvinceItem3").show();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu3").click(function(){
        $("#cityOfProvinceItem3").hide();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu3").click(function(){
        $("#provinces").show();
    });
});

$(document).ready(function(){
    $("#cityOfProvinceItem4").hide();
});
$(document).ready(function(){
    $("#provinceItem4").click(function(){
        $("#provinces").hide();
    });
});
$(document).ready(function(){
    $("#provinceItem4").click(function(){
        $("#cityOfProvinceItem4").show();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu4").click(function(){
        $("#cityOfProvinceItem4").hide();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu4").click(function(){
        $("#provinces").show();
    });
});

$(document).ready(function(){
    $("#cityOfProvinceItem5").hide();
});
$(document).ready(function(){
    $("#provinceItem5").click(function(){
        $("#provinces").hide();
    });
});
$(document).ready(function(){
    $("#provinceItem5").click(function(){
        $("#cityOfProvinceItem5").show();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu5").click(function(){
        $("#cityOfProvinceItem5").hide();
    });
});
$(document).ready(function(){
    $("#backToProvinceMenu5").click(function(){
        $("#provinces").show();
    });
});

$(document).ready(function () {
    $("#bottomSliderMoreItemLink").click(function () {
        $("#bottomSliderMoreItemModal").modal("show");
    });    
});

var swiper1 = new Swiper('.buyWithCategoryProducts', {
    slidesPerView : 8,

    breakpoints: {
        320: {
          slidesPerView: 3,
          grid : {
            rows : 3,
            fill : 'rows',
        },
        },
        1023: {
          slidesPerView: 6,
          grid : {
            rows : 3,
            fill : 'rows',
        },
        },
        1024: {
          slidesPerView: 8,
          grid : {
            rows : 2,
            fill : 'rows',
        },
        },
      }
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtnReedMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "مشاهده بیشتر";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "بستن";
      moreText.style.display = "inline";
    }
}

$(document).ready(function () {
    $("#superMarketOpener").click(function () {
        $("#superMarketModal").modal("show");
    });    
});

function superMarketButton() {
    
}