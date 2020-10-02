/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.todoApp')
        .controller('todoAppCtrl', todoAppCtrl);
  
    /** @ngInject */
    function todoAppCtrl($scope, baConfig) {
  
      $scope.transparent = baConfig.theme.blur;
      var dashboardColors = baConfig.colors.dashboard;
      var colors = [];
      for (var key in dashboardColors) {
        colors.push(dashboardColors[key]);
      }
  
      function getRandomColor() {
        var i = Math.floor(Math.random() * (colors.length - 1));
        return colors[i];
      }
  
      $scope.todoList = [
        { text: 'Check me out' },
        { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
        { text: 'Ex has semper alterum, expetenda dignissim' },
        { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
      ];
  
      $scope.todoList.forEach(function(item) {
        item.color = getRandomColor();
      });
  
      $scope.newTodoText = '';
  
      $scope.addToDoItem = function (event, clickPlus) {
        if (clickPlus || event.which === 13) {
          $scope.todoList.unshift({
            text: $scope.newTodoText,
            color: getRandomColor(),
          });
          $scope.newTodoText = '';
        }
      };
    }
  })();