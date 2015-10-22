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

			//TweenLite.to(water_out, 0, {scaleX:0, scaleY:0,});


		frame1();

	}
	

		
	function frame1()
	{
		// slide in
		TweenLite.to(black_headphone_1, 0.3, {left:-98, delay:0 });	
		TweenLite.to(wire, 0.3, {left:-98, delay:0});	
		TweenLite.to(wire, 1, {top:300, rotation:-90, delay:0.1});

		// slide in blur
		TweenLite.to(black_headphone_blur, 0.3, {left:-98, delay:0.1,  ease: Expo.easeOut });
		TweenLite.to(black_headphone_blur, 0.3, {opacity:1, left:-98, delay:0.1,  ease: Expo.easeOut });
		//TweenLite.to(black_headphone_3, 0.3, {opacity:1, left:-98, delay:0.1,  ease: Expo.easeOut });


		// Flip 
		TweenLite.to(black_headphone_blur, 1, {left:-153, delay:0.2, ease: Expo.easeOut });	

		//TweenLite.to(black_headphone_2, 1, {rotationY:180, left:0, delay:0.2, ease: Expo.easeOut });	
		//TweenLite.to(black_headphone_3, 1, {rotationY:180, opacity:1, left:0, delay:0.2, ease: Expo.easeOut });	


		TweenLite.to(black_headphone_1, 1, {rotationY:180, left:0, delay:0.2, ease: Expo.easeOut });	

		TweenLite.to(black_headphone_blur, 0.2, {opacity:0, delay:0.3 });
		//TweenLite.to(black_headphone_3, 0.3, {opacity:0, delay:0.4 });
		//TweenLite.to(black_headphone_1, 0, {opacity:0, delay:0.2, overwrite:"none"});



		//TweenLite.delayedCall(3.6, frame2);
	}
	
	function frame2()
	{


	
		TweenLite.delayedCall(0.2, frame3);	

	}
	
	function frame3()
	{	


		TweenLite.delayedCall(3, frame4);	
	}
	
	function frame4()
	{	

		TweenLite.delayedCall(0.6, frame5);	

	}

	function frame5()
	{	


	}




container.onmouseover = function() {
	if(endFrame == 1)
	{
 		//TweenLite.to(buy_now_over, 0.2, {opacity:1});
 		//TweenLite.to(buy_now, 0.2, {opacity:0});
	}

}

container.onmouseout = function() {
	if(endFrame == 1)
	{	
 		//TweenLite.to(buy_now_over, 0.2, {opacity:0});
  		//TweenLite.to(buy_now, 0.2, {opacity:1});
	}
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

