/*   Aniamte On Scroll Initialization.   */
AOS.init();


/*   Begigning of Scroll Progress Indicator   */
window.onload = function() {
	const wrapper = document.querySelector('.wrapper');
	const svg = document.querySelector('svg');
	const progressBar = document.querySelector('.progress-bar');
	const pct = document.querySelector('.pct');
	const totalLength = progressBar.getTotalLength();
	  
	setTopValue(svg);
	
	progressBar.style.strokeDasharray = totalLength;
	progressBar.style.strokeDashoffset = totalLength;
	
	window.addEventListener('scroll', () => {
	  setProgress(wrapper, pct, progressBar, totalLength);
	});
	
	window.addEventListener('resize', () => {
	  setTopValue(svg);
	});
}
  

function setTopValue(svg) {
	svg.style.top = document.documentElement.clientHeight * 0.5 - (svg.getBoundingClientRect().height * 0.5) + 'px';
}
  
function setProgress(wrapper, pct, progressBar, totalLength) {
	const clientHeight = document.documentElement.clientHeight;
	const scrollHeight = document.documentElement.scrollHeight;
	const scrollTop = document.documentElement.scrollTop;
	
	const percentage = scrollTop / (scrollHeight - clientHeight);
	if(percentage === 1) {
	  wrapper.classList.add('completed');
	} else {
	  wrapper.classList.remove('completed');
	}
	pct.innerHTML = Math.round(percentage * 100) + '%';
	progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;  
}
  /*   End of Scroll Progress Indicator   */


/*   Backgroung Audio   */
const bgAudio = new Audio("./assets/audio/louis-armstrong-what-a-wonderful-world.mp3");
bgAudio.volume = 1;

window.addEventListener("DOMContentLoaded", event => {
	bgAudio.play(); // Auto Play Bg Audio

	// Loop Bg Audio Continiously
	// bgAudio.loop = true;
	if (typeof bgAudio.loop == 'boolean')
	{
		bgAudio.loop = true;
	}
	else
	{
		bgAudio.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);
	} // Auto Repeat bgAudio
});

//  Toggle Play When EqBars is Clicked
// let toggleBtn = document.querySelector(".toggleBtn");
// toggleBtn.addEventListener('click', function togglePlay() {
//     return bgAudio.paused ? bgAudio.play() : bgAudio.pause();
// });

$(document).ready(function() {
	let toggleBtn = $(".toggleBtn");
	let toggleColor = $(".eqBar");
	let pause = $('.paused')
	toggleBtn.click(function togglePlay() {
		return toggleColor.toggleClass("paused") && ((bgAudio.paused ? bgAudio.play() : bgAudio.pause()));
	  	// return false;
	});
});

// $(document).ready(function() {
// 	let toggleColor = $(".eqBar");
// 	toggleColor.click(function() {
// 	  toggleColor.toggleClass("paused");
// 	  return false;
// 	});
//   });


// Sound Bars
function fluctuate(eqBar) {
    const height = Math.floor(Math.random() * 19) + 1;
    //Animate the equalizer bar repeatedly
    eqBar.animate({
        height: height
    }, function() {
        fluctuate($(this));
    });
}
$(".eqBar").each(function(i) {
    fluctuate($(this));
});


/*   End of Background Audio   */



/*   Begining of Header   */
// Begining of Planet Object
const planets = [
    {
        // The Solar System Object
        "planetImg": "./assets/images/0-solar-system.png",
        "planetName": "The Solar System"
    },
    {
        // Planet Mecury Object
        "planetImg": "./assets/images/1-mecury.png",
        "planetName": "Planet Mecury"
    },
    {
        // Planet Venus Object
        "planetImg": "./assets/images/2-venus.png",
        "planetName": "Planet Venus"
    },
    {
        // Planet Earth Object
        "planetImg": "./assets/images/3-earth.png",
        "planetName": "Planet Earth"
    },
	{
        // Planet Mars Object
        "planetImg": "./assets/images/4-mars.png",
        "planetName": "Planet Mars"
    },
    {
        // Planet Jupiter Object
        "planetImg": "./assets/images/5-jupiter.png",
        "planetName": "Planet Jupiter"
    },
    {
        // Planet Saturn Object
        "planetImg": "./assets/images/6-saturn.png",
        "planetName": "Planet Saturn"
    },
    {
        // Planet Uranus Object
        "planetImg": "./assets/images/7-uranus.png",
        "planetName": "Planet Uranus"
    },
    {
        // Planet Neptune Object
        "planetImg": "./assets/images/8-neptune.png",
        "planetName": "Planet Neptune"
    },
    {
        // Planet Pluto Object
        "planetImg": "./assets/images/9-pluto.png",
        "planetName": "Planet Pluto"
    },
	// {
	// 	// Planet Centaurs Object
    //     "planetImg": "./assets/images/10-centaurs.png",
    //     "planetName": "Planet Centaurs"		
	// }

]; // End of Planet Object


/*   Functions   */
// Count Init
let itemCount = 10;

// Images & Text
let img = document.querySelector("#slides");
let text = document.querySelector("#text");

//  Default Image
let defaultImg = "./assets/images/0-solar-system.png"; // Defaults to image1.png
document.querySelector("img").src = defaultImg; // Initialize Defaults Image

//  Default Text
let defaultTxt = planets[0].planetName; // Defaults to "The Solar System" Text
text.textContent = defaultTxt; // Initialize Defaults Text

// Buttons
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");



/* EventListeners */
// Auto Slide
window.addEventListener('load', function goAuto() {
    //Loop to the Next Planet Image (Ternary Ops)
    itemCount >= (planets.length - 1) ? itemCount = 0  : itemCount ++;

	// Init Next Planet Image Name
    let itemName = planets[itemCount].planetName;
	//console.log(itemName);

	//Loop to the Next Planet Name
	let planetImg = planets[itemCount].planetImg;
	img.src = planetImg;
	text.textContent = itemName;

    loopTimer = setTimeout(goAuto, 3000); // Sets Slides Timer
});


// Next Button
next.addEventListener('click', function goNext() {
	//Loop to the Next Image (Ternary Ops)
	itemCount >= (planets.length - 1) ? itemCount = 0  : itemCount ++;

	// Init Next Planet Image Name
   	let itemName = planets[itemCount].planetName;
	//console.log(itemName);

	//Loop to the Next Planet Name
   	let planetImg = planets[itemCount].planetImg;
	img.src = planetImg;
	text.textContent = itemName;
	// console.log(img);
});

//  Prev Button
prev.addEventListener('click', function goPrev() {
	//Loop to the Prev Image (Ternary Ops)
    itemCount <= 0 ? itemCount = (planets.length - 1) : itemCount --;
    
    // Init Prev Planet Image Name
    let itemName = planets[itemCount].planetName;
    // console.log(itemName);
 
	//Loop to the Prev Planet Name
    let planetImg = planets[itemCount].planetImg;
    img.src = planetImg;
    text.textContent = itemName;
 	// console.log(img);
 });

/*   End of Header   */




// ----------  STICKY NAV BAR-------------------------------------
jQuery.extend(jQuery.easing, {
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}
});

$(document).ready(function(){
// set up and create progress bar in DOM
	$('h4').eq(0).before('<div class="progressbar"></div>');
	let container = $('.progressbar');
	container.append('<div class="shim"></div>');	
  	let shim = $('.progressbar .shim');
	container.append('<div class="holder clearfix"></div>');
	let holder = $('.progressbar .holder');
	holder.append('<div class="bar"></div>');
	let bar = $('.progressbar .bar');
	bar.append('<div class="indicator"></div>');
	let indicator = $('.progressbar .indicator');
	holder.append('<div class="labels"></div>');
	let labels = $('.progressbar .labels');
	$('h4').each(function(){
		let code = '<i data-label="'+$(this).text()+'"></i>';
		labels.append(code);
	});
	let points = labels.find('i');
	points.css('width', 100/$('h4').length+'%');
	
	// match height of shim
	// stop layout jumping when progress bar fixes to / unfixes
	// from top of viewport
	function setShimHeight(){
		shim.css('height', container.height()+'px');
	}
	setShimHeight();
	$(window).resize(function(){ setShimHeight(); });
  
  	// position indicator bar so it starts at first dot
  	function setIndicatorX(){
    let point = points.eq(0);
    let xpos = point.offset().left + (point.width() / 2);
    indicator.css('left', xpos+'px');
  }

  setIndicatorX();
  $(window).resize(function(){ setIndicatorX(); });
  
	// fix/unfix progress bar to top of viewport
	function fixPosition(){
		if(container.is(':visible')) {
			if(!container.hasClass('fixed')) {
				if(holder.offset().top <= $(window).scrollTop()) {
          container.addClass('fixed');
        }
			}
			else {
				if(shim.offset().top > $(window).scrollTop()) {
          container.removeClass('fixed');
        }
			}
		}
	}

fixPosition();
$(window).scroll(function(){ fixPosition() });
$(window).resize(function(){ fixPosition(); });

// set trigger point
// i.e. how far down viewport is the "eye line"
let triggerPoint = 0;
function setTriggerPoint(){
	triggerPoint = $(window).height() * .18;
}

setTriggerPoint();
$(window).resize(function(){ setTriggerPoint(); });

// update progress bar
function setPosition(){
if(container.is(':visible')) {
	let section = false;
	let sectionIndex = 0;
	let currentPosition = $(window).scrollTop() + triggerPoint;
	// dots
	// if before first section
	if(currentPosition < $('h4').eq(0).offset().top) {
		points.removeClass('reading read');
		section = -1;
	}
	// if after first section
	else {
		$('h4').each(function(){
			let sectionTop = $(this).offset().top;
			if(currentPosition >= sectionTop) {
				points.removeClass('reading');
				points.eq(sectionIndex).addClass('reading');
				points.eq(sectionIndex).addClass('read');
				section = sectionIndex;
			}
			else {
				points.eq(sectionIndex).removeClass('read');
			}
			sectionIndex++;
		});
	}

	// bar
	let barWidth = 0;
	// if before start
	if(section == -1) {
		let point = points.eq(0);
		barWidth = point.offset().left + (point.width() / 2);
	}
	// if after end
	else if(section >= (points.length - 1)) {
		let point = points.eq((points.length - 1));
		barWidth = point.offset().left + (point.width() / 2);
	}
	// if within document
	else {
		let startPoint = points.eq(section);
		let startPointX = startPoint.offset().left;
		let startPointWidth = startPoint.width();
		let startSection = $('h4').eq(section);
		let endSection = $('h4').eq(section+1);
		let startSectionY = startSection.offset().top;
		let endSectionY = endSection.offset().top;
		let sectionLength = endSectionY - startSectionY;
		let scrollY = currentPosition - startSectionY;
		let sectionProgress = scrollY / sectionLength;
		barWidth = startPointX + (startPointWidth / 2) + (startPointWidth * sectionProgress);
	}
      barWidth -= indicator.offset().left;
			indicator.css('width', barWidth+'px');
		}
	}

	setPosition();
	$(window).scroll(function(){ setPosition(); });
	$(window).resize(function(){ setPosition(); });
  
	// on click, scroll to target section
	points.click(function(){
		let sectionIndex = points.index($(this));
		let targetY = $('h4').eq(sectionIndex).offset().top - (triggerPoint * .92);
		$('html, body').animate({scrollTop:targetY}, 600, 'easeInOutCubic');
	});
  
});




