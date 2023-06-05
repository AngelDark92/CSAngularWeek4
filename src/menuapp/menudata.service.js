(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', ['$http', "$q", function ($http, $q) {
      this.getAllCategories = function () {
        return $http({
          method: "GET",
          url: ('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
        }).then(function (response) {
          // return the response data when request is successful
          return response.data;
        });
      };

      this.getItemsForCategory = function (categoryShortName) {

        return $http({
          method: "GET",
          url: ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json')
        }).then(function (response) {
          // return the response data when request is successful
          return response.data;
        });
      };
    }]);

})();