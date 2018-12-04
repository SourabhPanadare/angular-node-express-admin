function initMap() {
    var uluru = {lat: 18.9932774, lng: 72.8262663};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

    var uluru1 = {lat: 1.299773, lng: 103.860582};
    var map1 = new google.maps.Map(document.getElementById('map1'), {
      zoom: 15,
      center: uluru1
    });
    var marker1 = new google.maps.Marker({
      position: uluru1,
      map: map1
    });

    var uluru2 = {lat: 1.299773, lng: 103.860582};
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 15,
      center: uluru2
    });
    var marker2 = new google.maps.Marker({
      position: uluru2,
      map: map2
    });
  }


/*------------------------------------------------------Document Ready Function-----------------------------------------*/

$(document).ready(function(){
  var w = $(window).width();
  var h = $(window).height();

  AOS.init({
    easing: 'ease-in-out-sine'
  });

  $('body').scrollspy({ target: '#navbar' });

});

/*----------------------------------------------------Window Resize Function---------------------------------------------*/

$(window).resize(function(){
  var w = $(window).width();
  var h = $(window).height();

});

/*----------------------------------------------------Window Rotate Function------------------------------------------*/

$( window ).on( "orientationchange", function( event ) {

});

/*----------------------------------------------------Window Load Function---------------------------------------------*/

$(window).on('load', function () {
  $(".home-ht-adjust").css('visibility','visible');
  $('.loader').hide();
});



/*----------------------------------------------------Window Scroll Function---------------------------------------------*/

$(window).scroll(function(){

});

/*-------------------------------------Common JS--------------------------------------*/
var w = $(window).width();
var h = $(window).height();


/*-------------------------------------------------Navigation Page Scroll------------*/

$("#mynavbar a").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 50
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }  // End if
  $('#mynavbar li a').removeClass('active');
  $(this).addClass('active');
});


/*------------------------------------------------FrontEnd Validation---------------------------*/

var iosnod = nod(),
    androidnod = nod(),
    netnod = nod(),
    phpnod = nod();

function telephone (callback, value) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var result = value.match(phoneno);
    callback(result);
}

function mail (callback, value) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var result = value.match(mailformat);
    callback(result);
}

iosnod.configure({
    submit: '.ios-submit',
    disableSubmit: true
});

androidnod.configure({
    submit: '.android-submit',
    disableSubmit: true
});

netnod.configure({
    submit: '.net-submit',
    disableSubmit: true
});

phpnod.configure({
    submit: '.php-submit',
    disableSubmit: true
});

iosnod.add([{
    selector: '#iosusername',
    validate: 'min-length:2',
    errorMessage: 'At least two characters long.'
}, {
    selector: '#iosuseremail',
    validate: mail,
    errorMessage: 'Invalid email address.'
}, {
    selector: '#iosusercontact',
    validate: telephone,
    errorMessage: 'Invalid contact number'
}]);

androidnod.add([{
    selector: '#androidusername',
    validate: 'min-length:2',
    errorMessage: 'At least two characters long.'
}, {
    selector: '#androiduseremail',
    validate: mail,
    errorMessage: 'Invalid email address.'
}, {
    selector: '#androidusercontact',
    validate: telephone,
    errorMessage: 'Invalid contact number'
}]);

netnod.add([{
    selector: '#netusername',
    validate: 'min-length:2',
    errorMessage: 'At least two characters long.'
}, {
    selector: '#netuseremail',
    validate: mail,
    errorMessage: 'Invalid email address.'
}, {
    selector: '#netusercontact',
    validate: telephone,
    errorMessage: 'Invalid contact number'
}]);

phpnod.add([{
    selector: '#phpusername',
    validate: 'min-length:2',
    errorMessage: 'At least two characters long.'
}, {
    selector: '#phpuseremail',
    validate: mail,
    errorMessage: 'Invalid email address.'
}, {
    selector: '#phpusercontact',
    validate: telephone,
    errorMessage: 'Invalid contact number'
}]);
