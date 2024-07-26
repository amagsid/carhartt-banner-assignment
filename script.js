//created a DOMContentLoaded eventListener to make sure functionality runs when HTML and DOM are fully loaded.

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner-slide');
    console.log(banner);

    const images = [
        'url(banner-images/image-1.png)',
        'url(banner-images/image-2.png)',
        'url(banner-images/image-3.png)',
    ];

    //initializing starting index with 0
    let currentIndex = 0;

    const toggleBackground = () => {
        banner.style.backgroundImage = images[currentIndex];

        //incrementing the index +1 each time it runs and making sure it wraps around back to 0 when it reaches the final index (imag-3)
        currentIndex = (currentIndex + 1) % images.length;
    };

    // Change background every 2 seconds

    setInterval(toggleBackground, 2000);

    toggleBackground();
});
