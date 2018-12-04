  'use strict';

  var app = angular.module('app',['ngAnimate','ui.bootstrap.collapse']);

  app.controller('NavigationCtrl', NavigationCtrl);
  app.controller('Banner', Banner);
  app.controller('Clients', Clients);
  app.controller('People', People);
  app.controller('Company', Company);
  app.controller('Careers', Careers);

  /*-------------------------------Owl Carousel-----------------------------------*/

  app.directive("owlCarousel", owlCarousel);
  app.directive('owlCarouselItem', owlCarouselItem);

  /*--------------------------------Controller Function---------------------------*/

  NavigationCtrl.$inject = [];

  function NavigationCtrl() {
  	var vm = this;
    vm.isCollapsed = true;
    vm.toggleCollapse = toggleCollapse;

    function toggleCollapse() {
    	vm.isCollapsed = !vm.isCollapsed;
    }
  }

  function Banner($scope, $http){
    $http.get('/bannerinfo').then(function(res){
      $scope.banner = res.data;
    });
  }

  function Clients($scope, $http){
    $http.get('/clientinfo').then(function(res){
      $scope.client = res.data;
    });
  }

  function People($scope, $http){
    $http.get('/peopleinfo').then(function(res){
      $scope.people = res.data;
    });
  }

  function Company($scope, $http){
    $http.get('/companyinfo').then(function(res){
      $scope.company = res.data;
    });
  }

  function Careers($scope){

    $scope.iosposition = ["IOS Developer", "Lead IOS Developer", "Senior IOS Developer", "IOS Architect"];
    $scope.androidposition = ["Android Developer", "Lead Android Developer", "Senior Android Developer", "Android Architect"];
    $scope.netposition = ["Frontend Developer", "Lead Frontend Developer", "Senior Frontend Developer", "Frontend Architect"];
    $scope.phpposition = ["Fullstack Developer", "Lead Fullstack Developer", "Senior Fullstack Developer", "Fullstack Architect"];

    $scope.iosapply = function(){
      $('#ios-apply').show();
      $('.ios-txt').hide();

      $('.ios-sbmt').show();
      $('.ios-buttons').hide();
    }

    $scope.androidapply = function(){
      $('#android-apply').show();
      $('.android-txt').hide();

      $('.android-sbmt').show();
      $('.android-buttons').hide();
    }

    $scope.netapply = function(){
      $('#net-apply').show();
      $('.net-txt').hide();

      $('.net-sbmt').show();
      $('.net-buttons').hide();
    }

    $scope.phpapply = function(){
      $('#php-apply').show();
      $('.php-txt').hide();

      $('.php-sbmt').show();
      $('.php-buttons').hide();
    }

    $scope.iossubmit = function(){
      var usrname, usremail, usrcontact, usrposition;

      var userformat = /[0-9a-zA-Z]{2,}/;
      var userresult = $('#iosusername').val().match(userformat);
      if(userresult){
        usrname = userresult;
      }else{
        usrname = '';
      }

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var mailresult = $('#iosuseremail').val().match(mailformat);
      if(mailresult){
        usremail = mailresult;
      }else{
        usremail = '';
      }

      var contactformat = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      var contactresult = $('#iosusercontact').val().match(contactformat);
      if(contactresult){
        usrcontact = contactresult;
      }else{
        usrcontact = '';
      }

      usrposition = $('#iosuserposition option:selected').text();

      if(usrname != '' && usremail != '' && usrcontact != '' && usrposition != ''){

        $.ajax({
          url: '/iosform',
          type: 'POST',
          data: {
            username: usrname,
            useremail: usremail,
            usercontact: usrcontact,
            userposition: usrposition,
            applytype: 'ios'
          }
        });

        iostoggle();

      }
    }

    $scope.androidsubmit = function(){
      var usrname, usremail, usrcontact, usrposition;

      var userformat = /[0-9a-zA-Z]{2,}/;
      var userresult = $('#androidusername').val().match(userformat);
      if(userresult){
        usrname = userresult;
      }else{
        usrname = '';
      }

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var mailresult = $('#androiduseremail').val().match(mailformat);
      if(mailresult){
        usremail = mailresult;
      }else{
        usremail = '';
      }

      var contactformat = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      var contactresult = $('#androidusercontact').val().match(contactformat);
      if(contactresult){
        usrcontact = contactresult;
      }else{
        usrcontact = '';
      }

      usrposition = $('#androiduserposition option:selected').text();

      if(usrname != '' && usremail != '' && usrcontact != '' && usrposition != ''){

        $.ajax({
          url: '/androidform',
          type: 'POST',
          data: {
            username: usrname,
            useremail: usremail,
            usercontact: usrcontact,
            userposition: usrposition,
            applytype: 'android'
          }
        });

        androidtoggle();

      }
    }

    $scope.netsubmit = function(){
      var usrname, usremail, usrcontact, usrposition;

      var userformat = /[0-9a-zA-Z]{2,}/;
      var userresult = $('#netusername').val().match(userformat);
      if(userresult){
        usrname = userresult;
      }else{
        usrname = '';
      }

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var mailresult = $('#netuseremail').val().match(mailformat);
      if(mailresult){
        usremail = mailresult;
      }else{
        usremail = '';
      }

      var contactformat = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      var contactresult = $('#netusercontact').val().match(contactformat);
      if(contactresult){
        usrcontact = contactresult;
      }else{
        usrcontact = '';
      }

      usrposition = $('#netuserposition option:selected').text();

      if(usrname != '' && usremail != '' && usrcontact != '' && usrposition != ''){

        $.ajax({
          url: '/netform',
          type: 'POST',
          data: {
            username: usrname,
            useremail: usremail,
            usercontact: usrcontact,
            userposition: usrposition,
            applytype: 'frontend'
          }
        });

        nettoogle();

      }
    }

    $scope.phpsubmit = function(){
      var usrname, usremail, usrcontact, usrposition;

      var userformat = /[0-9a-zA-Z]{2,}/;
      var userresult = $('#phpusername').val().match(userformat);
      if(userresult){
        usrname = userresult;
      }else{
        usrname = '';
      }

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var mailresult = $('#phpuseremail').val().match(mailformat);
      if(mailresult){
        usremail = mailresult;
      }else{
        usremail = '';
      }

      var contactformat = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      var contactresult = $('#phpusercontact').val().match(contactformat);
      if(contactresult){
        usrcontact = contactresult;
      }else{
        usrcontact = '';
      }

      usrposition = $('#phpuserposition').val();

      if(usrname != '' && usremail != '' && usrcontact != '' && usrposition != ''){

        $.ajax({
          url: '/phpform',
          type: 'POST',
          data: {
            username: usrname,
            useremail: usremail,
            usercontact: usrcontact,
            userposition: usrposition,
            applytype: 'backend'
          }
        });

        phptoogle();

      }
    }

    $scope.ioscancel = function(){
      iostoggle();
    }

    $scope.androidcancel = function(){
      androidtoggle();
    }

    $scope.netcancel = function(){
      nettoogle();
    }

    $scope.phpcancel = function(){
      phptoogle();
    }

  }
  /*----------------------------------------------------Owl Carousel---------------------------*/

    function owlCarousel(){
      return {
    		restrict: 'E',
    		transclude: false,
    		link: function (scope) {
    			scope.initCarousel = function(element) {
    			  // provide any default options you want
    				var defaultOptions = {
    				};
    				var customOptions = scope.$eval($(element).attr('data-options'));
    				// combine the two options objects
    				for(var key in customOptions) {
    					defaultOptions[key] = customOptions[key];
    				}
    				// init carousel
    				$(element).owlCarousel(defaultOptions);
    			};
    		}
    	};
    }

    function owlCarouselItem(){
      return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
          if(scope.$last) {
            scope.initCarousel(element.parent());
          }
        }
      };
    }

/*----------------------------------------------------------Custom Function-----------------------*/
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


function iostoggle(){
  $('.ios-txt').show();
  $('#ios-apply').hide();
  $('.ios-buttons').show();
  $('.ios-sbmt').hide();

  $('#iosusername').val('');
  $('#iosuseremail').val('');
  $('#iosusercontact').val('');
}

function androidtoggle(){
  $('.android-txt').show();
  $('#android-apply').hide();
  $('.android-buttons').show();
  $('.android-sbmt').hide();

  $('#androidusername').val('');
  $('#androiduseremail').val('');
  $('#androidusercontact').val('');
}

function nettoogle(){
  $('.net-txt').show();
  $('#net-apply').hide();
  $('.net-buttons').show();
  $('.net-sbmt').hide();

  $('#netusername').val('');
  $('#netuseremail').val('');
  $('#netusercontact').val('');
}

function phptoogle(){
  $('.php-txt').show();
  $('#php-apply').hide();
  $('.php-buttons').show();
  $('.php-sbmt').hide();

  $('#phpusername').val('');
  $('#phpuseremail').val('');
  $('#phpusercontact').val('');
}
