(function () {
    'use strict';
angular.module('Menu')
.component('items', {
    templateUrl: 'templates/items.template.html',
    bindings: {
        items: '<'
    }
});
})();