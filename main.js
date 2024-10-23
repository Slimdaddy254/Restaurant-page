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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #cfa05a;\n    color: #333;\n}\n\nheader {\n    background-color: #715c2e;\n    padding: 1rem;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\nbutton {\n    background-color: transparent;\n    border: 2px solid #ffffff;\n    color: white;\n    padding: 0.75rem 1.5rem;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n    border-radius: 4px;\n}\n\nbutton:hover {\n    background-color: #fff;\n    color: #2c3e50;\n}\n\nbutton.active {\n    background-color: #f7f2e4;\n    color: #2c3e50;\n}\n\n#content {\n    max-width: 1200px;\n    margin: 2rem auto;\n    padding: 2rem;\n    background-color: rgb(229, 206, 176);\n    box-shadow: 0 0 20px rgba(0,0,0,0.1);\n    border-radius: 8px;\n}\n\n/* Home Page Styles */\n.hero-image {\n    width: 100%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 8px;\n    margin: 1rem 0;\n}\n\n.main-title {\n    font-size: 2.5rem;\n    color: #2c3e50;\n    margin-bottom: 1rem;\n    text-align: center;\n}\n\n.main-description {\n    font-size: 1.2rem;\n    line-height: 1.6;\n    text-align: center;\n    max-width: 800px;\n    margin: 0 auto 2rem;\n    color: #666;\n}\n\n.features {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 2rem;\n    margin-top: 3rem;\n}\n\n.feature {\n    text-align: center;\n    padding: 1.5rem;\n    background-color: #f7f2e4;\n    background-image: image('.src//images/feature.jpg');\n    border-radius: 8px;\n}\n\n.feature h3 {\n    color: #2c3e50;\n    margin-bottom: 1rem;\n}\n\n/* Menu Page Styles */\n.menu-title {\n    text-align: center;\n    color: #2c3e50;\n    margin-bottom: 2rem;\n}\n\n.menu-section {\n    margin-bottom: 3rem;\n}\n\n.category-title {\n    color: #2c3e50;\n    border-bottom: 2px solid #e9ecef;\n    padding-bottom: 0.5rem;\n    margin-bottom: 1.5rem;\n}\n\n.menu-items {\n    display: grid;\n    gap: 1.5rem;\n}\n\n.menu-item {\n    padding: 1rem;\n    background-color: #f7f2e4;\n    border-radius: 8px;\n}\n\n.item-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 0.5rem;\n}\n\n.item-header h3 {\n    margin: 0;\n    color: #2c3e50;\n}\n\n.price {\n    font-weight: bold;\n    color: #2c3e50;\n}\n\n.item-description {\n    color: #666;\n    margin: 0;\n}\n\n/* Contact Page Styles */\n.contact-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n}\n\n.contact-info {\n    display: grid;\n    gap: 1.5rem;\n}\n\n.contact-detail {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 1.5rem;\n    background-color: #f7f2e4;\n    border-radius: 8px;\n}\n\n.contact-icon {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n}\n\n.map-section {\n    background-color: #f7f2e4;\n    border-radius: 8px;\n    padding: 1rem;\n}\n\n.map-placeholder {\n    background-color: #f7f2e4;\n    height: 400px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    color: #666;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n    .contact-container {\n        grid-template-columns: 1fr;\n    }\n\n    #content {\n        padding: 1rem;\n        margin: 1rem;\n    }\n\n    .features {\n        grid-template-columns: 1fr;\n    }\n}\n.about-title {\n    text-align: center;\n    color: #2c3e50;\n    margin-bottom: 2rem;\n}\n\n.about-container {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.story-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    align-items: center;\n}\n\n.about-image {\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 8px;\n}\n\n.story-content {\n    padding: 1rem;\n}\n\n.story-content h2 {\n    color: #2c3e50;\n    margin-bottom: 1rem;\n}\n\n.story-content p {\n    line-height: 1.6;\n    color: #666;\n}\n\n.values-section {\n    text-align: center;\n    padding: 2rem 0;\n}\n\n.values-title {\n    color: #2c3e50;\n    margin-bottom: 2rem;\n}\n\n.values-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 2rem;\n}\n\n.value-card {\n    padding: 2rem;\n    background-color: #f7f2e4;\n    border-radius: 8px;\n    text-align: center;\n}\n\n.value-card h3 {\n    color: #2c3e50;\n    margin-bottom: 1rem;\n}\n\n.team-section {\n    text-align: center;\n    padding: 2rem 0;\n}\n\n.team-section h2 {\n    color: #2c3e50;\n    margin-bottom: 1rem;\n}\n\n.team-section p {\n    line-height: 1.6;\n    color: #666;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n@media (max-width: 768px) {\n    .story-section {\n        grid-template-columns: 1fr;\n    }\n\n    .about-image {\n        height: 300px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/about.jpg */ \"./src/images/about.jpg\");\n\nfunction loadAbout() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n\n    // Create main headline\n    const headline = document.createElement('h1');\n    headline.textContent = 'About La Bella Cucina';\n    headline.classList.add('about-title');\n\n    // Create about container\n    const aboutContainer = document.createElement('div');\n    aboutContainer.classList.add('about-container');\n\n    // Create story section\n    const storySection = document.createElement('div');\n    storySection.classList.add('story-section');\n\n    const storyImage = document.createElement('img');\n    storyImage.src = _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    storyImage.alt = 'Our restaurant story';\n    storyImage.classList.add('about-image');\n\n    const storyContent = document.createElement('div');\n    storyContent.classList.add('story-content');\n\n    const storyTitle = document.createElement('h2');\n    storyTitle.textContent = 'Our Story';\n    \n    const storyText = document.createElement('p');\n    storyText.textContent = 'Founded in 1985, La Bella Cucina has been serving authentic Italian cuisine for over three decades. What started as a small family restaurant has grown into one of the city\\'s most beloved dining establishments.';\n\n    // Create values section\n    const valuesSection = document.createElement('div');\n    valuesSection.classList.add('values-section');\n\n    const values = [\n        {\n            title: 'Quality',\n            description: 'We source only the finest ingredients from local suppliers and Italy.'\n        },\n        {\n            title: 'Tradition',\n            description: 'Our recipes have been passed down through generations of Italian chefs.'\n        },\n        {\n            title: 'Service',\n            description: 'We treat every guest like family, ensuring a warm and memorable dining experience.'\n        }\n    ];\n\n    const valuesTitle = document.createElement('h2');\n    valuesTitle.textContent = 'Our Values';\n    valuesTitle.classList.add('values-title');\n\n    const valuesGrid = document.createElement('div');\n    valuesGrid.classList.add('values-grid');\n\n    values.forEach(value => {\n        const valueCard = document.createElement('div');\n        valueCard.classList.add('value-card');\n\n        const valueTitle = document.createElement('h3');\n        valueTitle.textContent = value.title;\n\n        const valueDescription = document.createElement('p');\n        valueDescription.textContent = value.description;\n\n        valueCard.appendChild(valueTitle);\n        valueCard.appendChild(valueDescription);\n        valuesGrid.appendChild(valueCard);\n    });\n\n    // Create team section\n    const teamSection = document.createElement('div');\n    teamSection.classList.add('team-section');\n\n    const teamTitle = document.createElement('h2');\n    teamTitle.textContent = 'Our Team';\n\n    const teamDescription = document.createElement('p');\n    teamDescription.textContent = 'Our talented team of chefs and staff work tirelessly to create an unforgettable dining experience for our guests. Led by Executive Chef Shady Mutethia, our kitchen combines traditional techniques with modern innovation.';\n\n    // Append all elements\n    content.appendChild(headline);\n    \n    storyContent.appendChild(storyTitle);\n    storyContent.appendChild(storyText);\n    storySection.appendChild(storyImage);\n    storySection.appendChild(storyContent);\n    aboutContainer.appendChild(storySection);\n\n    valuesSection.appendChild(valuesTitle);\n    valuesSection.appendChild(valuesGrid);\n    aboutContainer.appendChild(valuesSection);\n\n    teamSection.appendChild(teamTitle);\n    teamSection.appendChild(teamDescription);\n    aboutContainer.appendChild(teamSection);\n\n    content.appendChild(aboutContainer);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n\n    const headline = document.createElement('h1');\n    headline.textContent = 'Contact Us';\n    headline.classList.add('contact-title');\n\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact-container');\n\n    // Info Section\n    const infoSection = document.createElement('div');\n    infoSection.classList.add('contact-info');\n\n    const contactDetails = [\n        { icon: '📞', title: 'Phone', info: '(555) 123-4567' },\n        { icon: '📧', title: 'Email', info: 'info@labellacucina.com' },\n        { icon: '📍', title: 'Address', info: '123 Restaurant St, Foodville, TX 12345' },\n        { icon: '⏰', title: 'Hours', info: 'Mon-Sun: 11:00 AM - 10:00 PM' }\n    ];\n\n    contactDetails.forEach(detail => {\n        const detailDiv = document.createElement('div');\n        detailDiv.classList.add('contact-detail');\n\n        const icon = document.createElement('span');\n        icon.textContent = detail.icon;\n        icon.classList.add('contact-icon');\n\n        const title = document.createElement('h3');\n        title.textContent = detail.title;\n\n        const info = document.createElement('p');\n        info.textContent = detail.info;\n\n        detailDiv.appendChild(icon);\n        detailDiv.appendChild(title);\n        detailDiv.appendChild(info);\n        infoSection.appendChild(detailDiv);\n    });\n\n    // Map placeholder\n    const mapSection = document.createElement('div');\n    mapSection.classList.add('map-section');\n    \n    const map = document.createElement('div');\n    map.classList.add('map-placeholder');\n    map.textContent = 'Map View';\n\n    mapSection.appendChild(map);\n\n    content.appendChild(headline);\n    contactContainer.appendChild(infoSection);\n    contactContainer.appendChild(mapSection);\n    content.appendChild(contactContainer);\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hero.jpg */ \"./src/images/hero.jpg\");\n\nfunction loadHome() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n\n    // Hero section\n    const heroSection = document.createElement('div');\n    heroSection.classList.add('hero-section');\n\n    const headline = document.createElement('h1');\n    headline.textContent = 'Welcome to La Bella Cucina';\n    headline.classList.add('main-title');\n\n    const image = document.createElement('img');\n    image.src = _images_hero_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = 'La Bella Cucina Restaurant';\n    image.classList.add('hero-image');\n\n    // Description section\n    const descriptionSection = document.createElement('div');\n    descriptionSection.classList.add('description-section');\n\n    const description = document.createElement('p');\n    description.textContent = 'Experience the authentic flavors of Italy in the heart of the city. Our master chefs bring generations of culinary expertise to your table.';\n    description.classList.add('main-description');\n\n    // Features section\n    const featuresSection = document.createElement('div');\n    featuresSection.classList.add('features');\n\n    const features = [\n        { title: 'Fresh Ingredients', text: 'Locally sourced, organic produce' },\n        { title: 'Authentic Recipes', text: 'Traditional Italian cooking methods' },\n        { title: 'Cozy Atmosphere', text: 'Perfect for romantic dinners and family gatherings' }\n    ];\n\n    features.forEach(feature => {\n        const featureDiv = document.createElement('div');\n        featureDiv.classList.add('feature');\n\n        const featureTitle = document.createElement('h3');\n        featureTitle.textContent = feature.title;\n\n        const featureText = document.createElement('p');\n        featureText.textContent = feature.text;\n\n        featureDiv.appendChild(featureTitle);\n        featureDiv.appendChild(featureText);\n        featuresSection.appendChild(featureDiv);\n    });\n\n    // Append all sections\n    content.appendChild(headline);\n    content.appendChild(image);\n    content.appendChild(descriptionSection);\n    descriptionSection.appendChild(description);\n    content.appendChild(featuresSection);\n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('button');\n    buttons.forEach(btn => btn.classList.remove('active'));\n    button.classList.add('active');\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const homeBtn = document.getElementById('home-btn');\n    const menuBtn = document.getElementById('menu-btn');\n    const aboutBtn = document.getElementById('about-btn');\n    const contactBtn = document.getElementById('contact-btn');\n\n    homeBtn.addEventListener('click', () => {\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        setActiveButton(homeBtn);\n    });\n\n    menuBtn.addEventListener('click', () => {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setActiveButton(menuBtn);\n    });\n    aboutBtn.addEventListener('click', () => {    // Add this event listener\n        (0,_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        setActiveButton(aboutBtn);\n    });\n\n    contactBtn.addEventListener('click', () => {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        setActiveButton(contactBtn);\n    });\n\n    // Load home page by default\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    setActiveButton(homeBtn);\n});\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n\n    const headline = document.createElement('h1');\n    headline.textContent = 'Our Menu';\n    headline.classList.add('menu-title');\n\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    const menuCategories = [\n        {\n            category: 'Appetizers',\n            items: [\n                { name: 'Bruschetta', price: '$8.99', description: 'Toasted bread with fresh tomatoes and basil' },\n                { name: 'Caprese Salad', price: '$10.99', description: 'Fresh mozzarella with tomatoes and balsamic glaze' }\n            ]\n        },\n        {\n            category: 'Main Courses',\n            items: [\n                { name: 'Spaghetti Carbonara', price: '$16.99', description: 'Classic pasta with eggs, pecorino, and guanciale' },\n                { name: 'Margherita Pizza', price: '$14.99', description: 'Traditional pizza with tomato sauce, mozzarella, and basil' }\n            ]\n        },\n        {\n            category: 'Desserts',\n            items: [\n                { name: 'Tiramisu', price: '$7.99', description: 'Coffee-flavored Italian dessert' },\n                { name: 'Panna Cotta', price: '$6.99', description: 'Italian cream dessert with berry compote' }\n            ]\n        }\n    ];\n\n    menuCategories.forEach(category => {\n        const section = document.createElement('div');\n        section.classList.add('menu-section');\n\n        const categoryTitle = document.createElement('h2');\n        categoryTitle.textContent = category.category;\n        categoryTitle.classList.add('category-title');\n\n        const itemsList = document.createElement('div');\n        itemsList.classList.add('menu-items');\n\n        category.items.forEach(item => {\n            const itemDiv = document.createElement('div');\n            itemDiv.classList.add('menu-item');\n\n            const itemHeader = document.createElement('div');\n            itemHeader.classList.add('item-header');\n\n            const itemName = document.createElement('h3');\n            itemName.textContent = item.name;\n            \n            const itemPrice = document.createElement('span');\n            itemPrice.textContent = item.price;\n            itemPrice.classList.add('price');\n\n            const itemDescription = document.createElement('p');\n            itemDescription.textContent = item.description;\n            itemDescription.classList.add('item-description');\n\n            itemHeader.appendChild(itemName);\n            itemHeader.appendChild(itemPrice);\n            itemDiv.appendChild(itemHeader);\n            itemDiv.appendChild(itemDescription);\n            itemsList.appendChild(itemDiv);\n        });\n\n        section.appendChild(categoryTitle);\n        section.appendChild(itemsList);\n        menuContainer.appendChild(section);\n    });\n\n    content.appendChild(headline);\n    content.appendChild(menuContainer);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/images/about.jpg":
/*!******************************!*\
  !*** ./src/images/about.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae88a0704b6edbb258b4.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/about.jpg?");

/***/ }),

/***/ "./src/images/hero.jpg":
/*!*****************************!*\
  !*** ./src/images/hero.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4232af364e8af86032a2.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/hero.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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