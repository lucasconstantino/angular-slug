/**
 * Angular Slug
 * @version v0.0.3
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module('slug', [])

  /**
   * Simple slug wrapper as provider.
   */
  .provider('slug', function () {
    slug.$get = function () {
      return slug;
    }

    return slug;
  })

  /**
   * Slugifies a given string.
   */
  .filter('slug', function (slug) {
    return slug;
  });
