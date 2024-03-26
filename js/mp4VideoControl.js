document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video-bg");

    setTimeout(function() {
        video.pause();
    }, 3500); // 3.5초 후에 비디오 일시정지
});