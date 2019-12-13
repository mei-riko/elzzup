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

    if ((0, _jquery2.default)("#datepicker").length > 0) {
        (0, _jquery2.default)("#datepicker").datepicker();
    }

    // Slider
    if ((0, _jquery2.default)('.slider_request').length > 0) {
        var $slickElementLogo = (0, _jquery2.default)('.slider.slider_request');
        $slickElementLogo.slick({
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            infinite: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        });
    }
    // Select2
    if ((0, _jquery2.default)('.basic-select').length > 0) {
        (0, _jquery2.default)('.basic-select').select2();
    };
    // Collapse Item
    (0, _jquery2.default)(".item.item_collapse").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("item_collapse--active");
        (0, _jquery2.default)(this).find(".item__content").slideToggle();
    });
    // Dropdown Nav
    (0, _jquery2.default)(".nav .nav__item.nav__item_dropdown .nav__link").on("click", function (e) {
        e.preventDefault();
        var openNav = (0, _jquery2.default)(this).data("href");
        // Show Dropdown
        (0, _jquery2.default)("#" + openNav).slideToggle();
        // Add Active Class
        (0, _jquery2.default)("#" + openNav).toggleClass("active");
        (0, _jquery2.default)(this).toggleClass("active");
    });
    (0, _jquery2.default)(document).mouseup(function (e) {
        // событие клика по веб-документу
        var dropdownNavActive = (0, _jquery2.default)(".nav .nav__item.nav__item_dropdown .nav__link.active"); // пункт меню
        var dropdownActive = (0, _jquery2.default)(".nav .dropdown.active"); // элемент

        if (!dropdownActive.is(e.target) // клик был не по блоку
        && !dropdownNavActive.is(e.target) // и не по активному пункту меню
        && dropdownActive.has(e.target).length === 0) {
            // и не по его дочерним элементам
            (0, _jquery2.default)(".nav .nav__item.nav__item_dropdown .nav__link.active").removeClass("active");
            dropdownActive.removeClass("active");
            dropdownActive.hide();
        }
    });
    // Nav Mobile
    (0, _jquery2.default)(".navbar-mobile .navbar .navbar__link#openNabvar").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("navbar__link--active");
        (0, _jquery2.default)(".navbar-fullscreen").toggleClass("navbar-fullscreen--active");

        if ((0, _jquery2.default)(this).hasClass("navbar__link--active")) {
            (0, _jquery2.default)("body").attr("style", "position: fixed; overflow: hidden;");
        } else {
            (0, _jquery2.default)("body").attr("style", "");
        }
    });
    // Hide Navigation on Desktop
    (0, _jquery2.default)(window).resize(function () {
        if ((0, _jquery2.default)(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches) {
            (0, _jquery2.default)(".navbar-mobile .navbar .navbar__link#openNabvar").removeClass("navbar__link--active");
            (0, _jquery2.default)(".navbar-fullscreen").removeClass("navbar-fullscreen--active");
            (0, _jquery2.default)("body").attr("style", "");
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);