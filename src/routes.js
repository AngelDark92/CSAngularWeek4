(function () {
'use strict';

angular.module('Menu')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    controller: 'CategoriesController as categoriesCtrl',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    // This is how the return statement is resolved, categories will be the name injected to the categories service
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        var categories = MenuDataService.getAllCategories();
        return categories;
      }]
    }
  })

  .state('items', {
    url: '/{categoryShortName}/items',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: "ItemsController as itemsCtrl",
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        var items = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        // console.log(items);
        return items;
      }]
  }
  });

}

})();
