//created a DOMContentLoaded eventListener to make sure functionality runs when HTML and DOM are fully loaded.

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner-slide');
    console.log(banner);

    // const images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'];
    const colors = ['red', 'yellow', 'blue'];

    //initializing starting index with 0
    let currentIndex = 0;

    const toggleBackground = () => {
        banner.style.backgroundColor = colors[currentIndex];

        //incrementing the index +1 each time it runs and making sure it wraps around back to 0 when it reaches the final index (imag-3)
        currentIndex = (currentIndex + 1) % colors.length;
    };

    // Change background every 2 seconds

    setInterval(toggleBackground, 2000);

    toggleBackground();
});
