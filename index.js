let cosmosConfig;
let environment;
let appConfig;

try {
    cosmosConfig = require('/config/config.json');
    environment = cosmosConfig.environment;
} catch (e) {
    environment = 'sandbox';
}

if ('sandbox' === environment) {
    try {
        appConfig = require('../../configuration-secure.json');
    } catch (e) {
        throw new Error('Cannot load configuration file');
    }
    appConfig.environment = environment;
} else {
    try {
        appConfig = require('../../configuration.json');
    } catch (e) {
        throw new Error('Cannot load configuration file');
    }
    appConfig.environment = environment;
    appConfig.cosmos = cosmosConfig;
}

module.exports = {
    getConfig: appConfig,
    getEnvironment: environment
};