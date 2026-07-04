function openModal(videoId) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    player.src = ""; // Stops the video when closed
    modal.style.display = 'none';
}

const logo = document.getElementById("logoLink");
if (logo) {
    logo.addEventListener("click", function (e) {
        // Are we already on the homepage?
        const isHome =
            window.location.pathname.endsWith("index.html") ||
            window.location.pathname === "/" ||
            window.location.pathname === "";
        if (isHome) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
}