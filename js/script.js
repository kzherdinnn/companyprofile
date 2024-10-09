$(document).ready(function() {
    // Menghilangkan loader setelah halaman dimuat
    $(".bg-loader").fadeOut("slow");

    // Menambahkan animasi fade-in pada section saat di-scroll
    $(window).on('scroll', function() {
        $('section').each(function() {
            var top = $(window).scrollTop();
            var offset = $(this).offset().top - 300;
            if (top > offset) {
                $(this).addClass('visible');
            }
        });
    });

    // Smooth scroll untuk navigasi
    $('header ul li a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
