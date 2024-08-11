var environments = {};

// Dev environment
environments["dev"] = {
    'DBHost' : '127.0.0.1',
    'envName' : 'development'
};

environments["production"] = {
    'DBHost' : 'product-db',
    'envName' : 'production'
};

var currEnv = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV : '';

//Export the environment
var environmentToExport = typeof (environments[currEnv]) == 'object' ? environments[currEnv] : environments.dev;

// Export environment module
module.exports = environmentToExport;