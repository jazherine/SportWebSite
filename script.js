// Form ve geri bildirim mesajını seçiyoruz
const form = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');
const loadingBar = document.getElementById('loadingBar');
const progress = document.getElementById('progress');

// Form gönderildiğinde yapılacak işlemler
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    loadingBar.classList.remove('hidden');
    let width = 0;

    const loadingInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(loadingInterval); // Loading tamamlandıysa interval'ı durdur
            feedback.classList.remove('hidden');
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }, 20); // Yavaşça ilerlemesi için interval süresi (50ms)



    setTimeout(() => {
        feedback.classList.add('hidden'); // Mesajı gizle
        form.reset(); // Formu sıfırla
        loadingBar.classList.add('hidden'); // Loading bar'ı gizle
        progress.style.width = '0'; // Progress'i sıfırla
    }, 7000); // 7 saniye sonra form sıfırlansın
});

function readMore(url) {
    window.location.href = url;
}
