/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contentModules.js":
/*!*******************************!*\
  !*** ./src/contentModules.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageContent\": () => (/* binding */ homePageContent),\n/* harmony export */   \"contactContent\": () => (/* binding */ contactContent)\n/* harmony export */ });\n\nfunction homePageContent(){\n    \n\n    const mainSection = document.createElement('div')\n    mainSection.classList.add('main-section')\n    mainSection.setAttribute('data-page-name','home')\n\n    const contentSection = document.createElement('div')\n    contentSection.classList.add('content-section')\n\n    const contentTitle = document.createElement('p')\n    contentTitle.classList.add('content-title')\n    contentTitle.textContent = 'The Best Restaurant In Westeros'\n\n    const contentCopy = document.createElement('p')\n    contentCopy.classList.add('content-copy')\n    contentCopy.innerHTML = 'Hot Pie started making pies when he was 3 years old. <br> While pregnant, his mom read him all the pie recipes from the local libraries. <br> Since he was 3, the only thing hotpie ever ate was the pies he made. <br> Other fantastic dishes are also availible. Mastery is what this Restaurant is all about.' \n\n    const hotpie = document.createElement('img')\n    hotpie.setAttribute('id', 'hotpie')\n    hotpie.setAttribute('src', \"../Assets/img/Screen Shot 2021-09-25 at 13.24.57.png\")\n    hotpie.setAttribute('alt', 'hotpie')\n\n\n    contentSection.append(contentTitle, contentCopy, hotpie)\n    mainSection.appendChild(contentSection)\n    return mainSection;\n}\n\nfunction contactContent(){\n    const mainSection = document.createElement('div')\n    mainSection.classList.add('main-section')\n    mainSection.setAttribute('data-page-name', 'contact')\n\n    const contentSection = document.createElement('div')\n    contentSection.classList.add('content-section')\n\n    const contentTitle = document.createElement('p')\n    contentTitle.classList.add('content-title')\n    contentTitle.textContent = 'Visit Us'\n\n    const contentInst = document.createElement('p')\n    contentInst.classList.add('content-copy')\n\n    const map = document.createElement('img')\n    map.setAttribute('id', 'map')\n    map.setAttribute('src', '../Assets/img/Screen Shot 2021-09-25 at 17.36.16.png')\n    map.setAttribute('alt','map')\n\n    contentSection.append(contentTitle,map,contentInst)\n\n    return mainSection\n    \n    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contentModules.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contentModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentModules */ \"./src/contentModules.js\");\n\n createHeader();\n// homePageContent();\n\nfunction createHeader(){\n\n    const header = document.createElement('div')\n    header.classList.add('header')\n    console.log(header);\n    const headerTitle = document.createElement('p')\n    headerTitle.textContent = 'Valar Morgulis'\n    const toggleSection = document.createElement('div')\n    const homeBtn = document.createElement('button')\n    homeBtn.textContent = 'Home'\n    const menuBtn = document.createElement('button')\n    menuBtn.textContent = 'Menu'\n    const contactBtn = document.createElement('button')\n    contactBtn.textContent = 'Contact'\n\n    toggleSection.classList.add('toggle-section')\n    homeBtn.classList.add('toggle-btn')\n    menuBtn.classList.add('toggle-btn')\n    contactBtn.classList.add('toggle-btn')\n\n    toggleSection.append(homeBtn, menuBtn, contactBtn)\n    header.append(headerTitle,toggleSection)\n    const bodySection = document.querySelector('.body-section')\n    bodySection.appendChild(header)\n    console.log(header);\n\n   \n    \n}\n\nconst toggleButtons = document.querySelectorAll('.toggle-btn')\nconsole.log(toggleButtons);\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;