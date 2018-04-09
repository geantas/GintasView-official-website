	var sind = 0;
	var nind = 0;
	var eind = 0;
	var mind = 0;
	var x = document.getElementById('name').value;
	
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};
	
$(document).ready(function(){

	
var x = document.getElementById('name').value;
var y = document.getElementById('email').value;
var z = document.getElementById('message').value;


$('.contactForm').on('click', '.submit', function(e){
			document.getElementById("submitform").disabled = true;
			$("#sapprove").fadeIn('fast');
			setTimeout("$('#sapprove').fadeOut('fast');", 1000);
			
			e.preventDefault();
			var name = $('#name').val();
			var email = $('#email').val();
			var message = $('#message').val();
			$.ajax({
				type: "POST",
				url: "mailus.php",
				data: { name: name, email: email, message: message }
			}).done(function() {
				$(".approve").hide();
				setTimeout('$("#formwrapper").slideUp("slow");', 350);
				setTimeout('$("#messageSent").slideDown("900");', 100);
				$('html, body').animate({
					scrollTop: $("#sestas").offset().top -140
				}, 350);
			}); 
			
	});
});