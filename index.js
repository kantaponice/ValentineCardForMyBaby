$(document).ready(function() {
    // Create floating hearts
    function createFloatingHeart() {
        const heart = $('<div>❤</div>').addClass('floating-heart');
        heart.css({
            left: Math.random() * window.innerWidth + 'px',
            animationDuration: (Math.random() * 4 + 4) + 's'
        });
        $('body').append(heart);
        setTimeout(() => heart.remove(), 6000);
    }

    // Generate floating hearts periodically
    setInterval(createFloatingHeart, 2000);

    // Envelope interaction
    let isOpen = false;
    
    $('#open').click(function() {
        if (!isOpen) {
            $('#envelope').addClass('exploded');
            setTimeout(function() {
                $('.letter').addClass('show');
            }, 300);
            isOpen = true;
        }
    });

    $('#reset').click(function() {
        $('.letter').removeClass('show');
        setTimeout(function() {
            $('#envelope').removeClass('exploded');
        }, 300);
        isOpen = false;
    });

    // Music control
    const music = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isMusicPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            music.pause();
            musicToggle.innerHTML = '♪';
        } else {
            music.play();
            musicToggle.innerHTML = '⏸';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Heart hover effect
    $('.heart').hover(
        function() {
            $(this).css('transform', 'rotate(45deg) scale(1.1)');
        },
        function() {
            $(this).css('transform', 'rotate(45deg) scale(1)');
        }
    );
});