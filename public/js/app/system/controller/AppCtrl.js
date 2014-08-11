'use strict'

angular.module('SystemModule')

  .controller('AppCtrl', ['$scope', '$state',  function($scope, $state){

    /**
     * Retrieves the total number of watchers currently in the page
     * @returns {Number}
     */
    $scope.totalWatches = function(){

      var root = $(document.getElementsByTagName('body'));
      var watchers = [];
      var f = function(element){
        if(element.data().hasOwnProperty('$scope')){
          angular.forEach(element.data().$scope.$$watchers, function(watcher){
            watchers.push(watcher);
          });
        }
        angular.forEach(element.children(), function(childElement){
          f($(childElement));
        });
      };
      f(root);
      return watchers.length;
    }

    /**
     * JQuery to Scroll Page
     */
    jQuery(document).ready(function() {
      var offset = 220;
      var duration = 500;
      jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
          jQuery('.back-to-top').fadeIn(duration);
        } else {
          jQuery('.back-to-top').fadeOut(duration);
        }
      });

      jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
      })
    });

  }]);
