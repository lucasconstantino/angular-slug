/**
 * Angular Slug
 * @version v0.0.3
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function() {
  'use strict';

  angular.module('slug', [])
    .provider('slug', slugProvider)
    .filter('slug', slugFilter);

  slugProvider.$inject = [];
  slugFilter.$inject = ['slug'];

  /**
   * Simple slug wrapper as provider.
   */
  function slugProvider() {
    slug.$get = function() {
      return slug;
    }
    return slug;
  }

  /**
   * Slugifies a given string.
   */
  function slugFilter(slug) {
    return slug;
  }

})();
