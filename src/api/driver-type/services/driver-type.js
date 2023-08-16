'use strict';

/**
 * driver-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::driver-type.driver-type');
