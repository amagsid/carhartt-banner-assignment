Task:
- Rotate banner every 2 seconds
-three media queries: 425px, 768px (mobile), and 1440px (desktop).


Approach 1:

have 3 divs each with an inline style for a different backbround image that are targeted by class and toggle an "active" class to show/hide 


Approach 2:

having an array of images (image URLs), targeting one div and havin a function that changes the background image using JS, then hooking up this function in a setInterval function 

steps taken:
1. worked on HTML structure from approach #1 and restructired it according to the new functionality (ex. 1 div instead of 3 different divs for banner)

2. edited CSS to represent the banner

3. tested functionality of toggling background using background colors as a start

4. imported images to use

5. through testing, I found the images would need further adjustment so I came to the conclusion to use 2 different sets if images, for mobile and desktop


Things I would have approached differently if I had more time:

- have the gradient on the banner image created in CSS (originally had it in css) rather than having it on the image used in resources instead 
- have 1 set of images rather than having 2 sets for different screen sizes and work on making the building blocks of the image (vector shape, gradient, image) fully reesponsive. Possibly by impleenting background-position CSS value 

