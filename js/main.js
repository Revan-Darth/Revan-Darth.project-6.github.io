$(document).ready(function() {
	$('.films__variants').slick({
		prevArrow: '<button class="slick-prev slick-arrow"><img src="images/icon/left-arrow.png" width="32px" alt=""></button>',
		nextArrow: '<button class="slick-next slick-arrow"><img src="images/icon/right-arrow.png" width="32px" alt=""></button>',
		slidesToShow: 5,
		slidesToScroll: 3,
		arrows:true,
		responsive: [
    {
     	breakpoint: 1340,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      	}
    	},
    {
     	breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false,
      	}
    	},
    	{
     	breakpoint: 802,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
      	}
    	},
    	{
     	breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerMode: true,
      	}
    	},
    ]
	});
	$('.film__variants').slick({
		prevArrow: '<button class="slick-prev slick-arrow"><img src="images/icon/left-arrow.png" width="32px" alt=""></button>',
		nextArrow: '<button class="slick-next slick-arrow"><img src="images/icon/right-arrow.png" width="32px" alt=""></button>',
		dots: true,
		arrows: true,
		responsive: [
   		{
     		breakpoint: 1100,
    		settings: {
      		dots: true,
      		arrows: false,
      		}
    	},
   ]
	});
	$('.film__images').each(function(){
 		$(this).magnificPopup({
 			delegate: 'a',
 			type: 'image',
 			tLoading: 'Загрузка изображения #%curr%...',
 			gallery: {
 				enabled: true,
 				navigateByImgClick: true,
 				preload: [0,1]
 			}
 	 	})
 	});

	 $('.today-news__tab').click(function(tabs){ // кнопки на которые будем нажимать
		tabs.preventDefault();
		$('.today-news__tab').removeClass('today-news__tab--active');
		$('.today__content-tab').removeClass('today__content-tab--active');
		$(this).addClass('today-news__tab--active');
		$($(this).attr('href')).addClass('today__content-tab--active');
	});
	  $('.today-wallpapers__image--zoom').magnificPopup({
 			type: 'image',
 			zoom: {
 			    enabled: true,
 			    duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 			}
 		});

	 $('.user__btn').magnificPopup({
   	type: 'inline',
   	focus: '#log',
	});

	 $('.popup-login__tab').click(function(tabs){ // кнопки на которые будем нажимать
		tabs.preventDefault();
		$('.popup-login__tab').removeClass('popup-login__tab--active');
		$('.popup-login__content').removeClass('popup-login__content--active');
		$(this).addClass('popup-login__tab--active');
		$($(this).attr('href')).addClass('popup-login__content--active');
	});

	 $('.header__burger').click(function(event){
		$('.header__burger, .adaptive__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
