var names = ["Kenzie", "Amber", "Altamir", "Mark", "Joe", "Scott", "Anthony", "Brooks", "Natalie", "Matthew", "Charlie", "Chris", "Jeremy", "Eric", "Nathan", "Robby", "Sam", "Zach", "Liz", "Paul"];

var ticker = -1;

$(document).ready(function(){
	$('#all-names').append('<button class="button">Click here</button>');
	$('#all-names').on('click', '.button', revealName);
	$('#all-names').on('click', '.person', fadeNameDown);
	$('#all-names').on('click', '.down', fadeNameUp);
	// $('#all-names').children('.person').on('click', fadeNameDown);
	// $('#all-names').children('.down').on('click', fadeNameUp);


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

function fadeNameDown() {
    $(this).animate({opacity: 0.05});
    $(this).addClass('down');
	}



function fadeNameUp() {
    $(this).animate({opacity: 1.00});
    $(this).removeClass('down');
	};

