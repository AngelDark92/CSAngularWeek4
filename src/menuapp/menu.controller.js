(function () {
    'use strict';

    angular.module('Menu')
        .controller('CategoriesController', ['categories', function (categories) {
            this.categories = categories;
            
        }])
        .controller('ItemsController', ['items', function (items) {
            this.menu_items = items.menu_items;
            this.category = items.category;
        }]);

})();