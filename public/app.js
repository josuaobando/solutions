'use strict'

// Declare app level module which depends on filters, and services
angular.module('Solutions', ['pascalprecht.translate', 'ui.bootstrap', 'pasvaz.bindonce', 'ui.router'])

  .config(['$translateProvider', '$stateProvider', '$urlRouterProvider', function($translateProvider, $stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/login');

    $stateProvider

      // DEFAULT STATE WHEN THE CUSTOMER IS NOT LOGGUED IN
      .state('login', {
        url: '/login',
        data: { requiresLogin: false },
        controller: '',
        templateUrl: 'public/html/general/loginLayout.html' })

      .state('logout', {
        url: '/logout/:reason',
        data: { requiresLogin: false },
        controller: '',
        templateUrl: 'public/html/general/loginLayout.html' })

      .state('forgotPassword', {
        url: '/forgotPassword',
        data: { requiresLogin: false },
        controller: '',
        templateUrl: 'public/html/general/forgotPassword.html' })

      .state('renewPassword', {
        url: '/renewPassword',
        data: { requiresLogin: false },
        controller: '',
        templateUrl: 'public/html/general/renewPassword.html' })

      // APP BASE URL
      .state('app', {
        abstract: true,
        url: '/app',
        controller: 'AppCtrl',
        data: {},
        templateUrl: 'public/html/general/mainLayout.html' })

    // LANGUAGE CONFIGURATION
    $translateProvider.useStaticFilesLoader({
      prefix: 'public/lang/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  }])

  .run(['$rootScope', '$location', '$state', function($rootScope, $location, $state){

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

    });

  }]);
