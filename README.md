<div align="center">
    <img src="assets/logos/carhartt-logo.jpg" alt="Logo" width="300" alt="cahartt logo">

<h3 >Carhartt Rotating Images Banner Assignment</h3>

<a href="https://amagsid.github.io/carhartt-banner-assignment/">Live Demo</a>

</div>

## Getting Started

1. Clone the project
2. Host it using the <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Liver Server VScode plugin</a>

## Task:

-   Create a rotating banner every 2 seconds
-   Media queries: 425px, 768px, and 1440px (desktop).

### Approach 1:

Have 3 divs each with an inline style for a different backbround image that are targeted by class and toggle an "active" class to show/hide

### Approach 2 (applied):

Having an array of images (image URLs), targeting one div and havin a function that changes the background image using JS, then hooking up this function in a setInterval function

## steps taken:

1. Initially tried approach #1 but I realized I can build the functionality in a smarter way, rather than having 3 different banners and having them appearing and disappearing by applying CSS classes.

2. Worked on HTML structure following approach #2 and built it according to the new functionality (ex. 1 div with a background images that toggle and rotate, instead of 3 different divs for banner)

3. Worked on CSS to mimic the visuals of the banner from the Figma board.

4. Tested functionality of toggling background using background colors as a start.

<div  align="center">  <img src="assets/preview.gif"  alt="screenshoot showing assignment progress" width="600"> </div>

5. imported images to use

6. through testing, I found the images would need further adjustment so I came to the conclusion to use 2 different sets if images, for mobile and desktop

7. Refined CSS and worked on transitions

## Things I would have approached differently if I had more time:

-   Have the gradient on the banner image created in CSS (originally had it in css) rather than having it on the image used in resources instead
-   Have 1 set of images rather than having 2 sets for different screen sizes and work on making the building blocks of the image (vector shape, gradient, image) fully reesponsive. Possibly by impleenting background-position CSS value.
-   Have more breakpoints.
-   Build more elements and components on the page.
-   Modularized CSS into seperate files.
-   I would have liked and enjoyed to take on this assignment using Tailwind CSS for styling. I reaized how powerful it is when I compared the time styling took me in comparison with other personal projects I worked on.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
