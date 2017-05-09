let config;

try {
    config = require('/config/config.json');
    environment = cosmosConfig.environment;
    appConfig.cosmos = cosmosConfig;
    appConfig.environment = environment;
} catch (e) {
    environment = 'sandbox';
    appConfig.environment = environment;
}

try {
    appConfig = require('../../configuration-' + environment + '.json');
} catch (e) {
    throw new Error('Cannot load configuration file');
}

appConfig.environment = environment;

module.exports = {
    getConfig: appConfig,
    getEnvironment: environment
};