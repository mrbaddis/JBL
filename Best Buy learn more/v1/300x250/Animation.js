home_animation = (function() {
	
	var boundEvents = {};

	function bind (elem, eventName, callback) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, callback, false);
		}

		else if (elem.attachEvent) {
			var eID = elem.attachEvent('on'+ eventName, callback);
			boundEvents[eID] = { name: eventName, callback: callback };
		}
	}

	function unbind (elem, eventName, callback) {
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, callback, false);
		}

		else if (elem.detachEvent) {
			for (var eID in boundEvents) {
				if ((boundEvents[eID].name === eventName) &&
						(boundEvents[eID].callback === callback)) {
					elem.detachEvent(eID);
					delete boundEvents[eID];
				}
			}
		}
	}

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


		// CTA BTN CLICKTAG //
			bind(document.getElementById('click_screen'), 'click', function(e) 
			{
				e.preventDefault();
				Enabler.exit("clickTag1");
			});
			TweenLite.to(black_headphone_blur_right, 0, {left:-40});


		frame1();

	}
	function frame1()
	{

		TweenLite.to(black_headphone_1, 0.4, {left:-68, delay:0, ease: Expo.easeIn});	
		TweenLite.to(wire, 0.4, {left:-45, delay:0, ease: Expo.easeIn});	

		TweenLite.to(black_headphone_blur_left, 0, {opacity:1, delay:.4});
		TweenLite.to(black_headphone_blur_left, .2, {left:-100, delay:.4});
		TweenLite.to(wire, 1, {top:200, ease: Expo.easeOut, rotation:-45,  delay:.4});
		TweenLite.to(black_headphone_1, .1, {opacity:0, delay:.4});	

		TweenLite.to(black_headphone_blur_right, 0.2, {opacity:1,left:-140, delay: .4});
		TweenLite.to(black_headphone_blur_left, .1, {opacity:0, delay:.4});
		TweenLite.to(black_headphone_blur_right, .1, {opacity:0, delay:.8});

		TweenLite.to(black_headphone_1, 0, {rotationY:180, left:40, delay:.5});	
		TweenLite.to(black_headphone_1, .2, {opacity:1,rotationY:180, left:0, delay:.5});	


		TweenLite.delayedCall(0.7, frame2);
	}
	function frame2()
	{

		TweenLite.to(intro_text, 0.4, {opacity:1, delay:0 });
		TweenLite.to(jbl_logos, 0.3, {opacity:1, delay:0 });
		TweenLite.to(everest_text, 0.3, {opacity:1, delay:0.1 });
		TweenLite.to(headphone_text, 0.4, {opacity:1, delay:1.4 });
   // == show text ==
   var i;
    for (i = 1; i < 13; i++) {
      var j = i+2
      	TweenLite.to("wireless_text_"+i, .2, {opacity:1, delay: .1*i, ease: Expo.easeOut});
    	}
   var x;
    for (x = 1; x < 12; x++) {
      var j = x+2

     		TweenLite.to("wireless_text_"+x, .2, {opacity:0, delay: .1*j, ease: Expo.easeOut});
    	}
		TweenLite.delayedCall(3.5, frame3);	
	}
	function frame3()
	{	
		TweenLite.to(whileless_holder, 0.3, {opacity:0, delay:0 });
		TweenLite.to(intro_text, 0.3, {opacity:0, delay:0 });
		TweenLite.to(everest_text, 0.3, {opacity:0, delay:0 });
		TweenLite.to(headphone_text, 0.3, {opacity:0, delay:0 });

		TweenLite.delayedCall(3, frame4);	
	}
	function frame4()
	{	
		TweenLite.delayedCall(0.6, frame5);	
	}
	function frame5()
	{	


	}


	init();
});

// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}

function enablerInitHandler() {
  home_animation();
}

