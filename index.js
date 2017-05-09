let appConfig;
let cosmosConfig;
let environment;

try {
    cosmosConfig = require('/config/config.json');
    environment = cosmosConfig.environment;
} catch (e) {
    environment = 'sandbox';
}

try {
    appConfig = require('../../configuration-' + environment + '.json');
} catch (e) {
    throw new Error('Cannot load configuration file');
}

if (environment !== 'sandbox') {
    appConfig.cosmos = cosmosConfig;
    appConfig.environment = environment;
} else {
    appConfig.environment = environment;
}

module.exports = {
    getConfig: appConfig,
    getEnvironment: environment
};