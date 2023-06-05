(function () {
    'use strict';
    
    angular.module('Menu')
    .component('categories', {
      templateUrl: 'src/menuapp/templates/main-categories.template.html',
      bindings: {
        categories: '<'
      }
    });
    
    })();