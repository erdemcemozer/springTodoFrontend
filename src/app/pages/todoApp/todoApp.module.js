(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.todoApp', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('todoApp', {
            url: '/todoApp',
            templateUrl: 'app/pages/todoApp/todoApp.html',
            title: 'Todo App',
            sidebarMeta: {
              order: 800,
            },
          });
    }
  
  })();