/*!
 * welcomePage.js
 */

function moveUpWelcomeMsg()
{
	setTimeout(function(){$(".welcomeMsg").animate({"top": "-=100px" }, 1000)}, 800);

	setTimeout(function(){
		$("#chooseBox_1").animate({opacity: 0.6}, 1000);
		$(".chooseField").animate({"left": "+=200px"}, 1000);
	}, 900);
	setTimeout(function(){$("#chooseBox_2").animate({opacity: 0.6}, 1000)}, 1150);
	setTimeout(function(){$("#chooseBox_3").animate({opacity: 0.6}, 1000)}, 1400);
	setTimeout(function(){$("#chooseBox_4").animate({opacity: 0.6}, 1000)}, 1650);
}

function showBackgroundImage(i) {
	if (i == 1) {
		$("#backgroundImage0").animate({opacity: 0}, 500);
		$("#backgroundImage1").animate({opacity: 1}, 500);
		$("#backgroundImage2").animate({opacity: 0}, 500);
		$("#backgroundImage3").animate({opacity: 0}, 500);
		$("#backgroundImage4").animate({opacity: 0}, 500);
		$("#chooseBox_1").animate({opacity: 0.9}, 600);
	}
	else if (i == 2) {
		$("#backgroundImage0").animate({opacity: 0}, 500);
		$("#backgroundImage1").animate({opacity: 0}, 500);
		$("#backgroundImage2").animate({opacity: 1}, 500);
		$("#backgroundImage3").animate({opacity: 0}, 500);
		$("#backgroundImage4").animate({opacity: 0}, 500);
		$("#chooseBox_2").animate({opacity: 0.9}, 600);
	}
	else if (i == 3) {
		$("#backgroundImage0").animate({opacity: 0}, 500);
		$("#backgroundImage1").animate({opacity: 0}, 500);
		$("#backgroundImage2").animate({opacity: 0}, 500);
		$("#backgroundImage3").animate({opacity: 1}, 500);
		$("#backgroundImage4").animate({opacity: 0}, 500);
		$("#chooseBox_3").animate({opacity: 0.9}, 600);
	}
	else if (i == 4) {
		$("#backgroundImage0").animate({opacity: 0}, 500);
		$("#backgroundImage1").animate({opacity: 0}, 500);
		$("#backgroundImage2").animate({opacity: 0}, 500);
		$("#backgroundImage3").animate({opacity: 0}, 500);
		$("#backgroundImage4").animate({opacity: 1}, 500);
		$("#chooseBox_4").animate({opacity: 0.9}, 600);
	}
};

function cancelHighlight(i) {
	if (i == 1) $("#chooseBox_1").animate({opacity: 0.5}, 500);
	else if (i == 2) $("#chooseBox_2").animate({opacity: 0.5}, 500);
	else if (i == 3) $("#chooseBox_3").animate({opacity: 0.5}, 500);
	else if (i == 4) $("#chooseBox_4").animate({opacity: 0.5}, 500);
};

window.onload = moveUpWelcomeMsg;