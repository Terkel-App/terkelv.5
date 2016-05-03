angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('dashbordElev', {
    url: '/page4',
    templateUrl: 'templates/dashbordElev.html',
    controller: 'dashbordElevCtrl'
  })

  .state('dashbordLarer', {
    url: '/page5',
    templateUrl: 'templates/dashbordLarer.html',
    controller: 'dashbordLarerCtrl'
  })

  .state('timeplan', {
    url: '/page6',
    templateUrl: 'templates/timeplan.html',
    controller: 'timeplanCtrl'
  })

  .state('lekseplan', {
    url: '/page7',
    templateUrl: 'templates/lekseplan.html',
    controller: 'lekseplanCtrl'
  })

  .state('fravR', {
    url: '/page8',
    templateUrl: 'templates/fravR.html',
    controller: 'fravRCtrl'
  })

  .state('lekserpMinnelse', {
    url: '/page9',
    templateUrl: 'templates/lekserpMinnelse.html',
    controller: 'lekserpMinnelseCtrl'
  })

  .state('mineKlasser', {
    url: '/page10',
    templateUrl: 'templates/mineKlasser.html',
    controller: 'mineKlasserCtrl'
  })

  .state('sOS', {
    url: '/page11',
    templateUrl: 'templates/sOS.html',
    controller: 'sOSCtrl'
  })

  .state('meldingLarer', {
    url: '/page12',
    templateUrl: 'templates/meldingLarer.html',
    controller: 'meldingLarerCtrl'
  })

  .state('meldingElev', {
    url: '/page13',
    templateUrl: 'templates/meldingElev.html',
    controller: 'meldingElevCtrl'
  })


$urlRouterProvider.otherwise('/page1')



});
