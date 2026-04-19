
//load slideshow
window.addEventListener("load", makeSlideshow);

// slideshow container
function makeSlideshow() {
    let slideshow = document.getElementById("slideshow");

	// slideshow parts
   let slideTitle = document.createElement("h2");
   let slideCounter = document.createElement("div");
   let slidePrev = document.createElement("div");
   let slideNext = document.createElement("div");
   let slidePlay = document.createElement("div");
   let slideImages = document.createElement("div");

// slideshow title
  slideshow.appendChild(slideTitle);
  slideTitle.id = "slideTitle";
  slideTitle.textContent = "Activities at Pacific Trails";

   
	// slideshow counter
   slideshow.appendChild(slideCounter);
   slideCounter.id = "slideCounter"; 
   let currentImg = 1;
   slideCounter.textContent = currentImg + " / " + imgCount;
	
	
	   // slideshow previous slide button
   slideshow.appendChild(slidePrev);
   slidePrev.id = "slidePrev"; 
   slidePrev.innerHTML = "&#9664;";
   slidePrev.onclick = showPrev;
	
	 // slideshow next slide button
   slideshow.appendChild(slideNext);
   slideNext.id = "slideNext";
   slideNext.innerHTML = "&#9654;";
   slideNext.onclick = showNext;
	
	  // slideshow Play-Pause button
   slideshow.appendChild(slidePlay);
   slidePlay.id = "slidePlay"; 
   slidePlay.innerHTML = "&#9199;";
   let timeID;
   slidePlay.onclick = function() {
      if (timeID) {
         // Stop the slideshow
         window.clearInterval(timeID);
         timeID = undefined;
      } else {
         // Start the slideshow
         showNext();
         timeID = window.setInterval(showNext, 1500);
      }
   }
   
   // slideshow images container
   slideshow.appendChild(slideImages);
   slideImages.id = "slideImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      slideImages.appendChild(image);
   }
	
	   // Function to move forward through the image list
   function showNext() {
      slideImages.appendChild(slideImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      slideCounter.textContent = currentImg + " / " + imgCount;
   }
	
	   // Function to move backward through the image list
   function showPrev() {
      slideImages.insertBefore(slideImages.lastElementChild, slideImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      slideCounter.textContent = currentImg + " / " + imgCount;
   }
	
	function createOverlay() {
      let overlay = document.createElement("div");
      overlay.id = "slideOverlay";
      
      // Add the figure box to the overlay
      let figureBox = document.createElement("figure");
      overlay.appendChild(figureBox);
      
      // Add the image to the figure box
      let overlayImage = this.cloneNode("true");
      figureBox.appendChild(overlayImage);

      // Add the caption to the figure box
      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt;
      figureBox.appendChild(overlayCaption);
      
      // Add a close button to the overlay
      let closeBox = document.createElement("div");
      closeBox.id = "slideOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(overlay);
      }      
      overlay.appendChild(closeBox);
      
      document.body.appendChild(overlay);
   }   

}

// Title of the slideshow
let slideTitle = "Activities at Pacific Trails";

// Names of the image files shown in the slideshow
let imgFiles = ["images/activity1.jpg", "images/activity2.jpg", "images/activity3.jpg", "images/activity4.jpg",
                "images/activity5.jpg", "images/activity6.jpg", "images/activity7.jpg", "images/activity8.jpg",
                "images/activity9.jpg", "images/activity10.jpg"]

// Captions associated with each image
let imgCaptions = new Array(10);
imgCaptions[0]="While anytime is a good time for bird watching at Pacific Trails, we offer guided birdwatching";
imgCaptions[1]="Ocean kayaks are available for guest use"; 
imgCaptions[2]="5 miles of hiking trails and is adjacent to a state park. Go it alone or join one of our guided hikes"; 
imgCaptions[3]="Breakfast Buffet"; 
imgCaptions[4]="Meet Dolphins!";
imgCaptions[5]="Scuba Diving";
imgCaptions[6]="Free Jetski Rentals (With purchase of Kayak)";
imgCaptions[7]="Art and Painting for children 13 and Under!";
imgCaptions[8]="Waterpark right outside the Hotel";
imgCaptions[9]="Many Photo Opportunities around the trail";

// Count of images in the slideshow
let imgCount = imgFiles.length;




