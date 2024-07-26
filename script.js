//created a DOMContentLoaded eventListener to make sure functionality runs when HTML and DOM are fully loaded.

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner-slide');

    // detecting viewport width to determine which set of images yp use
    let width = document.body.clientWidth;

    const detectWidth = () => {
        width = document.body.clientWidth;
        console.log(width);
    };

    const images = [
        'url(banner-images/image-1.png)',
        'url(banner-images/image-2.png)',
        'url(banner-images/image-3.png)',
        'url(banner-images/image-4.png)',
        'url(banner-images/image-5.png)',
        'url(banner-images/image-6.png)',
    ];
    const mobileImages = [
        'url(banner-images/mobile-image-1.png)',
        'url(banner-images/mobile-image-2.png)',
        'url(banner-images/mobile-image-3.png)',
        'url(banner-images/mobile-image-4.png)',
        'url(banner-images/mobile-image-5.png)',
        'url(banner-images/mobile-image-6.png)',
    ];

    // detecting viewport width to change array of images shown in banner
    window.addEventListener('resize', detectWidth);

    //initializing starting index with 0
    let currentIndex = 0;

    const toggleBackground = () => {
        if (width >= 426) {
            banner.style.backgroundImage = images[currentIndex];
        }
        if (width <= 425) {
            banner.style.backgroundImage = mobileImages[currentIndex];
        }

        //incrementing the index +1 each time it runs and making sure it wraps around back to 0 when it reaches the final index (imag-3)
        currentIndex = (currentIndex + 1) % images.length;
    };

    // Change background every 2 seconds
    setInterval(toggleBackground, 2000);

    toggleBackground();
});
