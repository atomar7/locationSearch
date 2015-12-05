 'use strict';

angular.module('atlocationApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-atlocationApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-atlocationApp-params')});
                }
                return response;
            }
        };
    });
