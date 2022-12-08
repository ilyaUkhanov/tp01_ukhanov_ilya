const path = require('path');

const config = {
    // First, let's define an entry point for webpack to start its crawling.
    entry: './src/index.js',
    // Second, we define where the files webpack produce, are placed
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            { 
                test: /\.less$/,
                use: [ 
                    'style-loader',
                    'css-loader', 
                    'less-loader'
                ],
            },
        ]
    }
};

module.exports = config;