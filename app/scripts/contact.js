/*$(document).ready(function(){
    $(".submit").click(function(){
        emailjs.sendForm("gmail","contact_form",{name: "Sara", notes: "Check this out!"});
    });
});*/

var myform= $('form#myform');
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = 'default_service';
  var template_id = 'contact_form';
  var name = myform.find('#name');

  myform.find('button').text('Sending...');
  emailjs.sendForm(service_id,template_id,'myform')
  	.then(function(){
    	alert('Sent!');
       myform.find('button').text('Send');
    }, function(err) {
       alert('Send email failed!\r\n Response:\n ' + JSON.stringify(err));
       myform.find('button').text('Send');
    });
    return false;
  });
