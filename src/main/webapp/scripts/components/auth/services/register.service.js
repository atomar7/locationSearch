'use strict';

angular.module('atlocationApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


