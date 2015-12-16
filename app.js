var names = ["Kenzie", "Amber", "Altamir", "Mark", "Joe", "Scott", "Anthony", "Brooks", "Natalie", "Matthew", "Charlie", "Chris", "Jeremy", "Eric", "Nathan", "Robby", "Sam", "Zach", "Liz", "Paul"];

var ticker = -1;

$(document).ready(function(){
	$('#all-names').append('<button class="button">Click here</button>');
	$('#all-names').on('click', '.button', revealName);
	$('.person').on('click', fadeName);


});

function revealName(){
	var $el = $('#all-names').children().last();

	ticker += 1;
	
	$el.parent().append('<div class="person">' + names[ticker] + '</div>');
	$('.person:last').hide();
	$('.person:last').slideDown();

	
	if (names[ticker] == undefined){
		$('.person').remove();
		ticker = -1;
		};
	
	console.log(ticker);
	
	}

function fadeName(){
	$(this).animate({opacity: 0.5});
}


