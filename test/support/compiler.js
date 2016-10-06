/* eslint-disable prefer-arrow-callback */

var fs = require('fs');
var babel = require('babel-core');
var path = require('path');
var Module = require('module');
var origFindPath = Module._findPath;

var PROCESS_MODULES = [
  'react-native-vector-icons',
];

var originalLoader = require.extensions['.js'];
require.extensions['.js'] = function(module, fileName) {
  if (fileName.indexOf('node_modules/') !== -1) {
    var shouldProcess = false;
    for (var i = 0; i < PROCESS_MODULES.length; i++) {
      var name = PROCESS_MODULES[i];
      if (fileName.indexOf('node_modules/' + name) !== -1) {
        shouldProcess = true;
        break;
      }
    }
    if (shouldProcess === false) {
      return originalLoader(module, fileName);
    }
  }
  var src = fs.readFileSync(fileName, 'utf8');
  var output = babel.transform(src, {
    filename: fileName,
    sourceFileName: fileName,
  });
  return module._compile(output.code, fileName);
};

Module._findPath = function(request, paths) {
  var filename = origFindPath(request, paths);
  if (!filename) {
    var cacheKey = JSON.stringify({request: request, paths: paths});
    for (var i = 0; i < paths.length; i++) {
      var basePath = path.resolve(paths[i], request);
      try {
        filename = fs.realpathSync(basePath + '.ios.js', Module._realpathCache);
      } catch (ex) {
      }
      if (filename) {
        Module._pathCache[cacheKey] = filename;
      }
    }
  }
  return filename;
};
