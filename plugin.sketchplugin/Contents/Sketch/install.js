var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/install.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@skpm/child_process/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@skpm/child_process/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports.spawnSync = __webpack_require__(/*! ./lib/spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")
module.exports.execFileSync = __webpack_require__(/*! ./lib/execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")
module.exports.execSync = __webpack_require__(/*! ./lib/execSync */ "./node_modules/@skpm/child_process/lib/execSync.js")


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execFileSync.js":
/*!**************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execFileSync.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var spawnSync = __webpack_require__(/*! ./spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout');
  }
}


function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer');
  }
}

module.exports = function (file, args, options) {
  var defaultOptions = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null,
    shell: false
  };

  if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options, callback)
    callback = options
    options = Object.assign(defaultOptions, args)
    args = []
  } else {
    // function (file, args, options, callback)
    options = Object.assign(defaultOptions, options || {})
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout);

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer);

  var child = spawnSync(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell,
    encoding: options.encoding
  });

  if (child.status !== 0) {
    var error = new Error("Failed to run: " + String(child.stderr))
    error.pid = child.pid
    error.status = child.status
    error.stdout = child.stdout
    error.stderr = child.stderr
    throw error
  }

  return child.stdout;
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execSync.js":
/*!**********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execSync.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var execFileSync = __webpack_require__(/*! ./execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")

function normalizeExecArgs(command, options) {
  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);
  options.shell = typeof options.shell === 'string' ? options.shell : true;

  return {
    file: command,
    options: options
  };
}

module.exports = function(command, options) {
  var opts = normalizeExecArgs(command, options);
  return execFileSync(opts.file, opts.options);
};


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/handleData.js":
/*!************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/handleData.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function handleData(data, encoding) {
  switch (encoding) {
    case 'utf8':
      return String(NSString.alloc().initWithData_encoding(data, NSUTF8StringEncoding))
    case 'ascii':
      return String(NSString.alloc().initWithData_encoding(data, NSASCIIStringEncoding))
    case 'utf16le':
    case 'ucs2':
      return String(NSString.alloc().initWithData_encoding(data, NSUTF16LittleEndianStringEncoding))
    case 'base64':
      var nsdataDecoded = NSData.alloc().initWithBase64EncodedData_options(data, 0)
      return String(NSString.alloc().initWithData_encoding(nsdataDecoded, NSUTF8StringEncoding))
    case 'latin1':
    case 'binary':
      return String(NSString.alloc().initWithData_encoding(data, NSISOLatin1StringEncoding))
    case 'hex':
      // TODO: how?
      return data
    default:
      return data
  }
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function normalizeSpawnArguments(file, args, options) {
  if (typeof file !== 'string' || file.length === 0)
    throw new Error('ERR_INVALID_ARG_TYPE');

  if (Array.isArray(args)) {
    args = args.slice(0);
  } else if (args !== undefined && (args === null || typeof args !== 'object')) {
    throw new Error('ERR_INVALID_ARG_TYPE args');
  } else {
    options = args;
    args = [];
  }

  if (options === undefined)
    options = {};
  else if (options === null || typeof options !== 'object')
    throw new Error('ERR_INVALID_ARG_TYPE options');

  // Validate the cwd, if present.
  if (options.cwd != null && typeof options.cwd !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.cwd');
  }

  // Validate detached, if present.
  if (options.detached != null && typeof options.detached !== 'boolean') {
    throw new Error('ERR_INVALID_ARG_TYPE options.detached');
  }

  // Validate the uid, if present.
  if (options.uid != null && !Number.isInteger(options.uid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.uid');
  }

  // Validate the gid, if present.
  if (options.gid != null && !Number.isInteger(options.gid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.gid');
  }

  // Validate the shell, if present.
  if (options.shell != null &&
      typeof options.shell !== 'boolean' &&
      typeof options.shell !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.shell');
  }

  // Validate argv0, if present.
  if (options.argv0 != null && typeof options.argv0 !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.argv0');
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);

  if (options.shell) {
    var command = [file].concat(args).join(' ');

    if (typeof options.shell === 'string') {
      file = options.shell;
    } else {
      file = '/bin/bash';
    }
    args = ['-l', '-c', command];
  }

  if (typeof options.argv0 === 'string') {
    args.unshift(options.argv0);
  }

  var env = options.env;

  return {
    file: file,
    args: args,
    options: options,
    envPairs: env
  };
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/spawnSync.js":
/*!***********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/spawnSync.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSPipe, NSTask, NSArray, NSHomeDirectory, NSFileHandleNotificationDataItem, NSUTF8StringEncoding, NSString, NSNotificationCenter, NSSelectorFromString, NSFileHandleReadCompletionNotification, NSDictionary, NSBundle */
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")
var normalizeSpawnArguments = __webpack_require__(/*! ./normalizeSpawnArguments */ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js")

function spawnSync (_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options);

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync('/bin/bash', ['-l', '-c', 'which ' + opts.file], {encoding: 'utf8'})
    if (whichChild.err) {
      return whichChild
    }
    return spawnSync(whichChild.stdout.trim(), _args, _options)
  } else {
    var options = opts.options;

    var pipe = NSPipe.pipe()
    var errPipe = NSPipe.pipe()

    try {
      var task = NSTask.alloc().init()
      task.setLaunchPath(NSString.stringWithString(opts.file).stringByExpandingTildeInPath())
      task.arguments = NSArray.arrayWithArray(opts.args || [])
      if (opts.envPairs) {
        task.environment = opts.envPairs
      }

      if (options.cwd) {
        task.setCurrentDirectoryPath(NSString.stringWithString(options.cwd).stringByExpandingTildeInPath())
      }

      task.setStandardOutput(pipe)
      task.setStandardError(errPipe)

      task.launch()
      task.waitUntilExit()

      return {
        pid: String(task.processIdentifier()),
        status: Number(task.terminationStatus()),
        get stdout() {
          var data = pipe.fileHandleForReading().readDataToEndOfFile()
          return handleData(data, options.encoding)
        },
        get stderr() {
          var data = errPipe.fileHandleForReading().readDataToEndOfFile()
          return handleData(data, options.encoding)
        },
      }
    } catch (err) {
      return {
        err: err,
      }
    }
  }
}

module.exports = spawnSync


/***/ }),

/***/ "./src/install.js":
/*!************************!*\
  !*** ./src/install.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _require = __webpack_require__(/*! @skpm/child_process */ "./node_modules/@skpm/child_process/index.js"),
    execSync = _require.execSync;

var installPlugins = function installPlugins(context) {
  execSync(String(context.plugin.urlForResourceNamed('sketchPlugins.sh').path()));
};

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  installPlugins(context);
  context.document.showMessage("Sketch plugins installed! 🙌");
});

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=install.js.map