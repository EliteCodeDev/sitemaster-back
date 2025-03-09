'use strict';

/**
 * vps-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vps-service.vps-service');
