$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});

$.fn.skill = function() {

	mSkill = this;
  $(window).on('scroll', function() { // las animaciones se dispararan cuando el recuadro este visible en el viewport
	
	mSkill.find('.skillBar').each(function() {

		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.90 &&!$(this).hasClass("sk-fired")) {
			//una vez que cada skill bar esta en el viewport
			
			$(this).addClass('sk-fired'); //agregamos una clase como bandera para evitar que se vuelva a reproducir la animacion
			var defaultPercentage = "50%";
			var color = $(this).attr('skill-color');
			var defaultColor = "white";
			//animamos el ancho de cada barra
			if($(this).attr('skill-percentage')) {
				$(this).width($(this).attr('skill-percentage'));
			} else {
				$(this).width(defaultPercentage);
			}

			//seteamos el color

			if(color) {
				$(this).css('background-color', color);
			} else {
				$(this).css('background-color',defaultColor);
			}

			//buscamos las imagenes para animarlas
			$(this).parent().find(".skill-image").each(function() {
				var imagen = $(this);
				setInterval(function() {

					imagen.show().addClass("animated").addClass("bounceIn");
				}, 2000);
				
			});
			}
		});

}	);

     return mSkill;
}

$(document).ready(function() {
			$(".habilidades").skill();
		});

		(function () {
			var elem = document.querySelector(".swiper-container");
			if (elem !== null) { //swiper-containerがあれば…
			var mySwiper = new Swiper(".swiper-container", {
			  loop: true, //ループさせる
			  effect: "fade", //フェードのエフェクト
			  autoplay: {
				delay: 4000, //４秒後に次の画像へ
				disableOnInteraction: false //ユーザー操作後に自動再生を再開する
			  },
			  speed: 2000, //２秒かけながら次の画像へ移動
			  allowTouchMove: false, //マウスでのスワイプを禁止
			  navigation: { //左右のページ送りを有効にする
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			  },
			  pagination: { //円形のページネーションを有効にする
				el: ".swiper-pagination",
				clickable: true //クリックを有効にする
			  }
			});
		  }
		  })();		

		  (function () {
			var elem = document.querySelector(".swiper-container");
			if (elem !== null) { //swiper-containerがあれば…
			var mySwiper = new Swiper(".swiper-container", {
			  loop: true, //ループさせる
			  effect: "fade", //フェードのエフェクト
			  autoplay: {
				delay: 4000, //４秒後に次の画像へ
				disableOnInteraction: false //ユーザー操作後に自動再生を再開する
			  },
			  speed: 2000, //２秒かけながら次の画像へ移動
			  allowTouchMove: false, //マウスでのスワイプを禁止
			  navigation: { //左右のページ送りを有効にする
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			  },
			  pagination: { //円形のページネーションを有効にする
				el: ".swiper-pagination",
				clickable: true //クリックを有効にする
			  }
			});
		  }
		  })();		  