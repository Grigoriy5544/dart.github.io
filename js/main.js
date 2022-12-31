window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs_item"),
        playBtn = document.querySelector("#playVideo");
        video = document.querySelector("#video");
    playBtn.addEventListener('click', function() {
        video.play();
        video.setAttribute('controls', 'controls')
        playBtn.style.display = "none";
    })
    video.addEventListener('ended', function() {
        this.src = this.src
        playBtn.style.display = "block"
        video.removeAttribute('controls');
    })
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs_item_active")) {
                    otherItem.classList.remove("tabs_item_active");
                }
            })
            elem.classList.add("tabs_item_active")
        });
    });
    $('.carousel').slick({
        prevArrow: '<div class="carousel_arrow carousel_prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel_arrow carousel_next"><i class="fa-solid fa-chevron-right"></i></div>'
    });
    $('#buyNowBtn').on('click', popupOpen);
    $('#tryForBtn').on('click', popupOpen);
    $('.popup_close').on('click', () => {
        $('.popup').removeClass('popup_active');
        $('body').css("overflow", "visible");
    });
    function popupOpen() {
        $('.popup').addClass('popup_active');
        $('body').css("overflow", "hidden")
    }
});