/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.todoApp')
        .directive('todoApp', todoApp);
  
    /** @ngInject */
    function todoApp() {
      return {
        restrict: 'EA',
        controller: 'todoAppCtrl',
        templateUrl: 'app/pages/todoApp/todoApp.html'
      };
    }
  })();