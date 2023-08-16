'use strict';

/**
 * driver-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::driver-type.driver-type');
