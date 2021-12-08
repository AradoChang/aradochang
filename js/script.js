$(document).ready(function () {

    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });


    var swiper = new Swiper(".sw-pub", {
        slidesPerView: 4,
        spaceBetween: 30,
    });
    var swiper = new Swiper(".sw-skill", {
        slidesPerView: 3,
        spaceBetween: 30,
    });
    

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {

        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }

            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 500);
        });
    });


    var bar_html = new ProgressBar.Circle(html, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    var bar_css = new ProgressBar.Circle(css, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    var bar_jq = new ProgressBar.Circle(jq, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    var bar_js = new ProgressBar.Circle(js, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    var bar_ph = new ProgressBar.Circle(ph, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    var bar_il = new ProgressBar.Circle(il, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    var bar_xd = new ProgressBar.Circle(xd, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    var bar_oa = new ProgressBar.Circle(oa, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#767674',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    

    // 스크롤바의 위치를 체크한다.
    $(window).scroll(function(){
        // 스크롤바의 위치 값
        var scY = $(window).scrollTop();

        if(scY > 800) {
            // 애니메이션 실행
            bar_html.animate(0.9);  // Number from 0.0 to 1.0
            bar_css.animate(0.9);  // Number from 0.0 to 1.0
            bar_jq.animate(0.6);  // Number from 0.0 to 1.0
            bar_js.animate(0.7);  // Number from 0.0 to 1.0
            bar_ph.animate(0.9);  // Number from 0.0 to 1.0
            bar_il.animate(0.9);  // Number from 0.0 to 1.0
            bar_xd.animate(0.6);  // Number from 0.0 to 1.0
            bar_oa.animate(0.8);  // Number from 0.0 to 1.0
        }else {
            // 원래모습으로 돌리기
            bar_html.set(0.0);
            bar_css.set(0.0);
            bar_jq.set(0.0);
            bar_js.set(0.0);
            bar_ph.set(0.0);
            bar_il.set(0.0);
            bar_xd.set(0.0);
            bar_oa.set(0.0);
        }

    });    



});

window.onload = function () {
    AOS.init();
}