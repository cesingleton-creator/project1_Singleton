// Javascript for review page


let reviewers = ["birdluvr29", "TLaw086", "owltrowel", "akirakira"];
let stars = [5, 3, 3, 4];
let reviewDates = ["11/10/2025", "12/29/2025", "1/17/2026", "3/21/2026"];
let reviews = [
	
	"Amazing!! Had the best time kayaking. And I discovered all sorts of new birds to put into my journal. Staff were also lovely and very helpful.",
	
	"Found myself a little underwhelmed with the activities, but had a decent time overall. Wish there was more to do other than walking around and looking at birds.",
	
	"Wife and kids had a good time, and the trail was quite beautiful. I would've preferred staying home but I guess this was alright.",
	
	"Beautiful view, and we were able to walk to the ocean straight from our Yurt. Never heard of a Yurt before visiting pacific trails, but it was pretty comfortable. A bit pricey but worth it."];

let reviewTitles = ["Birds!!", "Needs more activities", "Good family trip", "Yurts?"];



function starImages(rating) {
	let imageText = "";
            for (let i = 1; i <= rating; i++) {
            imageText += "<img src = 'images/star.png' alt =''>";
            }
      return imageText;
	
}

      for (let i = 0; i < reviewers.length; i++ ) {
            let reviewCode = "<table>";

            reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
            reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
            reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
            reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
            reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
            reviewCode += "</table>";

            document.getElementsByTagName("article") [0].insertAdjacentHTML("beforeEnd", reviewCode);

      }