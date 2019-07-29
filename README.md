# Webpack-4-vuejs

This repo is a ready to use vuejs with vuex to manage your data.

## Installation

Use the package manager nvm. [minimum version of node 8.12.0]

```bash
npm install
```

## Usage
To run as development
```bash
npm run dev
```
Or you can watch the changes
```bash
npm run watch
```

Webpack in production
```bash
npm run build
```

The output file of css is base on input file of your js (e.g. app.js ).
Below is the basic configuration of webpack.

```bash
var path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'app' : './app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins:[
    new Dotenv()
  ]
}
```

## webpack-dev-server
The webpack-dev-server is by default will target your root folder. By this time it was configure in directory ./dist <br >
Add an index.html file in ./dist directory and link the bundled js file (e.g. app.bundle.js). <br >
Take note that webpack-dev-server will not generate any file so adding script tags will magically insert the js file to your index.html.
Please refer to webpack.config.js under devServer options.

```bash
<!DOCTYPE html>
<html>
<head>
  <title>Index Page</title>
</head>
<body>
  <div id="app">
    <p>Test page</p>
    <app-component></app-component>
  </div>
  <script type="text/javascript" src="app.bundle.js"></script>
</body>
</html>
```

Webpack in development server
```bash
npm run server
```