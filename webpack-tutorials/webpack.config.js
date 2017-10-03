const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};

const commonConfigs = {
    entry: {
        app: PATHS.app,
    },

    output: {
        path: PATHS.build,
        filename: '[name].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
        }),
    ],
};

const productionConfigs = () => commonConfigs;

const developmentConfigs = () => {
    const config = {
        devServer: {
            historyApiFallback: true,
            stats: 'errors-only',

            // Parse host and port from env to allow customization.
            //
            // If you use Docker, Vagrant or Cloud9, set
            // host: options.host || '0.0.0.0';
            //        
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: process.env.host, //defaults to 'localhost',
            port: process.env.port, //defaults to '8080'
        },
    };

    return Object.assign(
        {}, 
        commonConfigs, 
        config
    );
};

module.exports = (env) => {
    if (env === 'production'){
        return productionConfigs();
    }

    return developmentConfigs();
};