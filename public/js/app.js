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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)("a.scroll").click(function () {
        (0, _jquery2.default)("html, body").animate({
            scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    if ((0, _jquery2.default)("#datepicker").lenght) {
        (0, _jquery2.default)("#datepicker").datepicker({
            beforeShow: function beforeShow(input, inst) {
                _jquery2.default.datepicker._pos = _jquery2.default.datepicker._findPos(input); //this is the default position
                // $.datepicker._pos[0] = 0; //left
                _jquery2.default.datepicker._pos[1] = (0, _jquery2.default)(window).height() - 270; //top
            }
        });
    }

    // Collapse Item
    (0, _jquery2.default)(".item.item_collapse").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("item_collapse--active");
        (0, _jquery2.default)(this).find(".item__content").slideToggle();
    });
    // Nav Mobile
    (0, _jquery2.default)(".navbar-mobile .navbar .navbar__link#openNabvar").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("navbar__link--active");
        (0, _jquery2.default)(".navbar-fullscreen").toggleClass("navbar-fullscreen--active");
    });
    // Hide Navigation on Desktop
    (0, _jquery2.default)(window).resize(function () {
        if ((0, _jquery2.default)(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches) {
            (0, _jquery2.default)(".navbar-mobile .navbar .navbar__link#openNabvar").removeClass("navbar__link--active");
            (0, _jquery2.default)(".navbar-fullscreen").removeClass("navbar-fullscreen--active");
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);