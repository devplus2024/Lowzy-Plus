window.onload = function () {
  document.getElementsById("autoplay").play();
};

document.documentElement.style.setProperty("--animate-duration", "2s");

// All animations will take half the time to accomplish
document.documentElement.style.setProperty("--animate-duration", ".5s");

import lightGallery from "https://cdn.skypack.dev/lightgallery@2.4.0";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/thumbnail";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/video";
console.log(lgVideo, "lgVideo");

const $lgInlineVideoContainer = document.getElementById(
  "inline-video-gallery-container"
);

if ($lgInlineVideoContainer) {
  const _inlineGallery = lightGallery($lgInlineVideoContainer, {
    container: $lgInlineVideoContainer,
    dynamic: true,
    thumbnail: true,
    swipeToClose: false,
    // addClass: 'lg-inline',
    mode: "lg-scale-up",
    slideShowAutoplay: true,
    hash: false,
    pager: false,
    closable: false,
    showMaximizeIcon: true,
    rotate: false,
    download: false,
    slideDelay: 400,
    plugins: [lgThumbnail, lgVideo],
    // appendSubHtmlTo: '.lg-item',
    dynamicEl: [
      {
        src: "https://youtu.be/X-6B4HY4-Ro",
        subHtml: `<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>`,
      },
      {
        src: "https://youtu.be/X-6B4HY4-Ro",
        subHtml: `<h4>The Heart Of The Forest| Disney Favorite</h4>`,
        thumb: "https://img.youtube.com/vi/your_youtube_video_id/mqdefault.jpg",
      },
      {
        src: "https://youtu.be/X-6B4HY4-Ro",
        subHtml: `<h4>UE5 | In The Heart Of The Forest by Anastasia Gorban</h4>`,
      },
    ],
  });
  _inlineGallery.openGallery();
}
