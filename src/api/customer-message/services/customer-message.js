'use strict';

/**
 * customer-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-message.customer-message');
