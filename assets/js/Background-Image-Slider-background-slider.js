jQuery(function($){
				$.supersized({
					// Functionality
					slide_interval          :   3000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	700,		// Speed of transition					   
					// Components							
					slide_links				:	'false',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					:  	[			// Slideshow Images
														{image : 'ZDP/X-Plane_ZDP_beG7m16ikB.png'},
														{image : 'ZDP/X-Plane_ZDP_R0PZnFkHn8.png'},
                                                        {image : 'ZDP/X-Plane_ZDP_YwZjMZRmtJ.png'},
                                                        {image : 'ZDP/X-Plane_ZDP_RdLlXWfo1n.png'},
												]
				});
		    });