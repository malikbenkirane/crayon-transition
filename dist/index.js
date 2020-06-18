(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/body.ts":
/*!*********************!*\
  !*** ./src/body.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.root = void 0;\nexports.root = (selector) => `\n.is-animating {\n    overflow: hidden;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n`;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ib2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsSUFBSSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Q0FPekMsQ0FBQSJ9\n\n//# sourceURL=webpack:///./src/body.ts?");

/***/ }),

/***/ "./src/fade.ts":
/*!*********************!*\
  !*** ./src/fade.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.fade = void 0;\nexports.fade = (selector) => `\n${selector}.fade {\n    opacity: 0;\n    transition: opacity .5s;\n}\n\n${selector}.fade-enter-first {\n    position: static;\n    transition-duration: 0s !important;\n}\n\n${selector}.fade-enter {\n    opacity: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n${selector}.fade-enter-done {\n    opacity: 1;\n    height: 100%;\n}\n\n${selector}.fade-exit {\n    opacity: 0;\n}\n`;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsSUFBSSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUM7RUFDeEMsUUFBUTs7Ozs7RUFLUixRQUFROzs7OztFQUtSLFFBQVE7Ozs7Ozs7O0VBUVIsUUFBUTs7Ozs7RUFLUixRQUFROzs7Q0FHVCxDQUFBIn0=\n\n//# sourceURL=webpack:///./src/fade.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./loader */ \"./src/loader.ts\"), exports);\nconst loader_1 = __webpack_require__(/*! ./loader */ \"./src/loader.ts\");\nexports.default = {\n    loader: loader_1.loader,\n    slideUp: loader_1.slideUp,\n    slideDown: loader_1.slideDown,\n    slideLeft: loader_1.slideLeft,\n    slideRight: loader_1.slideRight,\n    pushUp: loader_1.pushUp,\n    pushDown: loader_1.pushDown,\n    pushLeft: loader_1.pushLeft,\n    pushRight: loader_1.pushRight,\n    popUp: loader_1.popUp,\n    popDown: loader_1.popDown,\n    popLeft: loader_1.popLeft,\n    popRight: loader_1.popRight,\n    fade: loader_1.fade\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdCO0FBRXhCLHFDQWVpQjtBQUVqQixrQkFBZTtJQUNYLE1BQU0sRUFBTixlQUFNO0lBQ04sT0FBTyxFQUFQLGdCQUFPO0lBQ1AsU0FBUyxFQUFULGtCQUFTO0lBQ1QsU0FBUyxFQUFULGtCQUFTO0lBQ1QsVUFBVSxFQUFWLG1CQUFVO0lBQ1YsTUFBTSxFQUFOLGVBQU07SUFDTixRQUFRLEVBQVIsaUJBQVE7SUFDUixRQUFRLEVBQVIsaUJBQVE7SUFDUixTQUFTLEVBQVQsa0JBQVM7SUFDVCxLQUFLLEVBQUwsY0FBSztJQUNMLE9BQU8sRUFBUCxnQkFBTztJQUNQLE9BQU8sRUFBUCxnQkFBTztJQUNQLFFBQVEsRUFBUixpQkFBUTtJQUNSLElBQUksRUFBSixhQUFJO0NBQ1AsQ0FBQSJ9\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/loader.ts":
/*!***********************!*\
  !*** ./src/loader.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.fade = exports.popRight = exports.popLeft = exports.popDown = exports.popUp = exports.pushRight = exports.pushLeft = exports.pushDown = exports.pushUp = exports.slideRight = exports.slideLeft = exports.slideDown = exports.slideUp = exports.loader = void 0;\nconst fromSlide = __importStar(__webpack_require__(/*! ./slide */ \"./src/slide.ts\"));\nconst fromFade = __importStar(__webpack_require__(/*! ./fade */ \"./src/fade.ts\"));\nconst fromPop = __importStar(__webpack_require__(/*! ./pop */ \"./src/pop.ts\"));\nconst fromPush = __importStar(__webpack_require__(/*! ./push */ \"./src/push.ts\"));\nconst body_1 = __webpack_require__(/*! ./body */ \"./src/body.ts\");\nexports.loader = (seletor = '.router-view') => {\n    const s = document.createElement('style');\n    s.innerHTML += body_1.root(seletor);\n    s.innerHTML += fromPop.pop(seletor);\n    s.innerHTML += fromPush.push(seletor);\n    s.innerHTML += fromSlide.slide(seletor);\n    s.innerHTML += fromFade.fade(seletor);\n    document.head.appendChild(s);\n    return (req, res, state) => { };\n};\nexports.slideUp = 'slide-up';\nexports.slideDown = 'slide-down';\nexports.slideLeft = 'slide-left';\nexports.slideRight = 'slide-right';\nexports.pushUp = 'push-up';\nexports.pushDown = 'push-down';\nexports.pushLeft = 'push-left';\nexports.pushRight = 'push-right';\nexports.popUp = 'pop-up';\nexports.popDown = 'pop-down';\nexports.popLeft = 'pop-left';\nexports.popRight = 'pop-right';\nexports.fade = 'fade';\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQXFDO0FBQ3JDLGlEQUFtQztBQUNuQywrQ0FBaUM7QUFDakMsaURBQWtDO0FBQ2xDLGlDQUE4QjtBQUVqQixRQUFBLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxjQUFjLEVBQXNCLEVBQUU7SUFDbkUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QyxDQUFDLENBQUMsU0FBUyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbkMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JDLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN2QyxDQUFDLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDNUIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUE7QUFDbEMsQ0FBQyxDQUFBO0FBRVksUUFBQSxPQUFPLEdBQUUsVUFBVSxDQUFBO0FBQ25CLFFBQUEsU0FBUyxHQUFFLFlBQVksQ0FBQTtBQUN2QixRQUFBLFNBQVMsR0FBRyxZQUFZLENBQUE7QUFDeEIsUUFBQSxVQUFVLEdBQUcsYUFBYSxDQUFBO0FBQzFCLFFBQUEsTUFBTSxHQUFFLFNBQVMsQ0FBQTtBQUNqQixRQUFBLFFBQVEsR0FBRSxXQUFXLENBQUE7QUFDckIsUUFBQSxRQUFRLEdBQUcsV0FBVyxDQUFBO0FBQ3RCLFFBQUEsU0FBUyxHQUFHLFlBQVksQ0FBQTtBQUN4QixRQUFBLEtBQUssR0FBRSxRQUFRLENBQUE7QUFDZixRQUFBLE9BQU8sR0FBRSxVQUFVLENBQUE7QUFDbkIsUUFBQSxPQUFPLEdBQUcsVUFBVSxDQUFBO0FBQ3BCLFFBQUEsUUFBUSxHQUFHLFdBQVcsQ0FBQTtBQUN0QixRQUFBLElBQUksR0FBRyxNQUFNLENBQUEifQ==\n\n//# sourceURL=webpack:///./src/loader.ts?");

/***/ }),

/***/ "./src/pop.ts":
/*!********************!*\
  !*** ./src/pop.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.pop = void 0;\nexports.pop = (selector) => `\n${selector}.push-up {\n    transform: translate3d(0, 100%, 0);\n}\n${selector}.push-up-enter {\n    transform: translate3d(0, 0%, 0);\n}\n\n${selector}.push-down {\n    transform: translate3d(0, -100%, 0);\n}\n${selector}.push-down-enter {\n    transform: translate3d(0, 0%, 0);\n}\n\n${selector}.push-left {\n    transform: translate3d(100%, 0, 0);\n}\n${selector}.push-left-enter {\n    transform: translate3d(0, 0, 0);\n}\n\n${selector}.push-right {\n    transform: translate3d(-100%, 0, 0);\n}\n${selector}.push-right-enter {\n    transform: translate3d(0, 0, 0);\n}\n\n${selector}.push-up,\n${selector}.push-down,\n${selector}.push-left,\n${selector}.push-right {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n${selector}.push-up-enter-first,\n${selector}.push-down-enter-first,\n${selector}.push-left-enter-first,\n${selector}.push-right-enter-first {\n    position: static;\n    transition-duration: 0s !important;\n}\n\n${selector}.push-up-enter-done,\n${selector}.push-down-enter-done,\n${selector}.push-left-enter-done,\n${selector}.push-right-enter-done {\n    transform: none;\n}\n\n${selector}.push-up-exit,\n${selector}.push-down-exit,\n${selector}.push-left-exit,\n${selector}.push-right-exit {\n    z-index: 1000;\n    transform: none\n}\n\n${selector}.push-up-enter,\n${selector}.push-down-enter,\n${selector}.push-left-enter,\n${selector}.push-right-enter {\n    z-index: 10000;\n    transition: transform .5s;\n}`;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3BvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLEdBQUcsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDO0VBQ3ZDLFFBQVE7OztFQUdSLFFBQVE7Ozs7RUFJUixRQUFROzs7RUFHUixRQUFROzs7O0VBSVIsUUFBUTs7O0VBR1IsUUFBUTs7OztFQUlSLFFBQVE7OztFQUdSLFFBQVE7Ozs7RUFJUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFROzs7Ozs7OztFQVFSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7Ozs7O0VBS1IsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTs7OztFQUlSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7Ozs7O0VBS1IsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTs7O0VBR1IsQ0FBQSJ9\n\n//# sourceURL=webpack:///./src/pop.ts?");

/***/ }),

/***/ "./src/push.ts":
/*!*********************!*\
  !*** ./src/push.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.push = void 0;\nexports.push = (selector) => `\n${selector}.pop-up {\n    transform: translate3d(0, 0%, 0);\n}\n${selector}.pop-up-exit {\n    transform: translate3d(0, -100%, 0);\n}\n\n${selector}.pop-down {\n    transform: translate3d(0,  0, 0);\n}\n${selector}.pop-down-exit {\n    transform: translate3d(0, 100%, 0);\n}\n\n${selector}.pop-left {\n    transform: translate3d(0, 0, 0);\n}\n${selector}.pop-left-exit {\n    transform: translate3d(-100%, 0, 0);\n}\n\n${selector}.pop-right {\n    transform: translate3d(0, 0, 0);\n}\n${selector}.pop-right-exit {\n    transform: translate3d(100%, 0, 0);\n}\n\n${selector}.pop-up,\n${selector}.pop-left,\n${selector}.pop-right,\n${selector}.pop-down {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n${selector}.pop-up-enter-first,\n${selector}.pop-left-enter-first,\n${selector}.pop-right-enter-first,\n${selector}.pop-down-enter-first {\n    position: static;\n    transition-duration: 0s !important;\n}\n\n${selector}.pop-up-enter-done,\n${selector}.pop-down-enter-done,\n${selector}.pop-left-enter-done,\n${selector}.pop-right-enter-done {\n    transform: none;\n}\n\n${selector}.pop-up-enter,\n${selector}.pop-down-enter,\n${selector}.pop-left-enter,\n${selector}.pop-right-enter {\n    transform: none;\n    z-index: 1000;\n}\n\n${selector}.pop-up-exit,\n${selector}.pop-down-exit,\n${selector}.pop-left-exit,\n${selector}.pop-right-exit {\n    transition: transform .5s;\n    z-index: 10000;\n}`;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wdXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsSUFBSSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUM7RUFDeEMsUUFBUTs7O0VBR1IsUUFBUTs7OztFQUlSLFFBQVE7OztFQUdSLFFBQVE7Ozs7RUFJUixRQUFROzs7RUFHUixRQUFROzs7O0VBSVIsUUFBUTs7O0VBR1IsUUFBUTs7OztFQUlSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7Ozs7Ozs7O0VBUVIsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTs7Ozs7RUFLUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFROzs7O0VBSVIsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTs7Ozs7RUFLUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFROzs7RUFHUixDQUFBIn0=\n\n//# sourceURL=webpack:///./src/push.ts?");

/***/ }),

/***/ "./src/slide.ts":
/*!**********************!*\
  !*** ./src/slide.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.slide = void 0;\nexports.slide = (selector) => `\n${selector}.slide-up.slide-up-enter {\n    top: 100%;\n    bottom: auto;\n    transform: translate3d(0,-100%,0);\n}\n${selector}.slide-up.slide-up-exit {\n    transform: translate3d(0,-100%,0);\n    top: 0%;\n    bottom: auto;\n}\n\n${selector}.slide-down.slide-down-enter {\n    top: auto;\n    bottom: 100%;\n    transform: translate3d(0,100%,0);\n}\n${selector}.slide-down.slide-down-exit {\n    top: auto;\n    transform: translate3d(0,100%,0);\n    bottom: 0%;\n}\n\n${selector}.slide-left.slide-left {\n    left: 100%;\n    right: auto;\n}\n${selector}.slide-left.slide-left-enter {\n    transform: translate3d(-100%,0,0);\n}\n${selector}.slide-left.slide-left-exit {\n    transform: translate3d(-100%,0,0);\n    left: 0%;\n    right: auto;\n}\n\n${selector}.slide-right.slide-right {\n    right: 100%;\n    left: auto;\n}\n${selector}.slide-right.slide-right-enter {\n    transform: translate3d(100%,0,0);\n}\n${selector}.slide-right.slide-right-exit {\n    transform: translate3d(100%,0,0);\n    right: 0%;\n    left: auto;\n}\n\n${selector}.slide-up-enter-first,\n${selector}.slide-down-enter-first,\n${selector}.slide-left-enter-first,\n${selector}.slide-right-enter-first {\n    position: static;\n    transition-duration: 0s !important;\n}\n\n${selector}.slide-up,\n${selector}.slide-down,\n${selector}.slide-left,\n${selector}.slide-right {\n    transition: transform .5s ease-in-out;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100vw;\n    height: 100%;\n}\n\n${selector}.slide-up-enter-done,\n${selector}.slide-down-enter-done,\n${selector}.slide-left-enter-done,\n${selector}.slide-right-enter-done {\n    position: static;\n    transition: none;\n    transform: none;\n    height: 100%;\n    width: auto;\n}\n`;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2xpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxLQUFLLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQztFQUN6QyxRQUFROzs7OztFQUtSLFFBQVE7Ozs7OztFQU1SLFFBQVE7Ozs7O0VBS1IsUUFBUTs7Ozs7O0VBTVIsUUFBUTs7OztFQUlSLFFBQVE7OztFQUdSLFFBQVE7Ozs7OztFQU1SLFFBQVE7Ozs7RUFJUixRQUFROzs7RUFHUixRQUFROzs7Ozs7RUFNUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFROzs7OztFQUtSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7Ozs7Ozs7Ozs7O0VBV1IsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTs7Ozs7OztDQU9ULENBQUEifQ==\n\n//# sourceURL=webpack:///./src/slide.ts?");

/***/ })

/******/ });
});