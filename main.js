/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Coolvetica';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('opentype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Bohemian Soul';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('opentype');\n    font-weight: normal;\n    font-style: normal;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n}\n\n#content {\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-rows: 150px 1fr 50px;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 0;\n    margin: 0;\n}\n\nli {\n    list-style-type: none;\n    font-size: 20px;\n    color: white;\n    transition: transform 0.2s;\n    cursor: pointer;\n}\n\nli:hover {\n    transform: scale(1.10);\n}\n\nh1 {\n    color: white;\n    font-size: 60px;\n    margin: 0;\n    cursor: default;\n    font-family: 'Bohemian Soul', serif;\n    letter-spacing: 5px;\n}\n\nmain {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* HOME PAGE STYLES */\n#homeCard {\n    background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#homeCard > p:first-of-type {\n    color: white;\n    text-align: center;\n    font-size: 72px;\n    width: 300px;\n    margin: 0;\n    font-family: 'Coolvetica', sans-serif;\n    cursor: default;\n}\n\n#homeCard > p:nth-of-type(2) {\n    color: white;\n    text-align: center;\n    font-size: 20px;\n    width: 35vw;\n    margin-bottom: 5vh;\n    font-family: 'Coolvetica', sans-serif;\n    letter-spacing: 0.5px;\n    cursor: default;\n}\n\n#orderBtn {\n    border: none;\n    border-radius: 8px;\n    width: 120px;\n    height: 32px;\n    background-color: #709a15;\n    color: white;\n    font-size: 16px;\n    font-weight:bold;\n    font-family: 'Coolvetica', sans-serif;\n    transition: transform 0.2s;\n    cursor: pointer;\n}\n\n#orderBtn:hover {\n    transform: scale(1.15);\n}\n\n/* MENU PAGE STYLES */\n#menuCard {\n    background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);\n    width: 100%;\n    height: 100%;\n}\n\n#menuGrid {\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    margin: 50px 25px;\n    grid-gap: 30px;\n}\n\n.menuItem {\n    background-color: rgba(255, 255, 255, 0.567);\n    width: auto;\n    height: 180px;\n    box-shadow: rgba(0, 0, 0, 0.15) 3.5px 3.5px 3px;\n    border-radius: 16px;\n\n    /*Grid Settings*/\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 1fr;\n\n    /*Animation*/\n    transition: transform 0.2s;\n}\n\n.menuItem:hover {\n    transform: scale(1.03);\n}\n\n/*MENU ITEM STYLES*/\n.menuItem > img {\n    width: 150px;\n    height: 150px;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n    /*Positioning the image*/\n    justify-self: center;\n    align-self: center;\n    padding-left: 8px;\n    cursor: default;\n}\n\n.menuItem > h3 {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin: 0;\n    padding: 0 20px 0 8px;\n    font-size: 22px;\n    font-family: 'Coolvetica', sans-serif;\n    cursor: default;\n}\n\n.menuItem > p {\n    font-size: 16px;\n    margin: 0;\n    padding: 0 20px 0 8px;\n    cursor: default;\n}\n\n/*ABOUT PAGE STYLES*/\n#aboutCard {\n    background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#aboutCard > p:first-of-type {\n    color: white;\n    word-break: normal;\n    white-space: normal;\n    text-align: center;\n    font-size: 32px;\n    width: 300px;\n    margin: 50px 0 20px 0;\n    padding: 0;\n    font-family: 'Coolvetica', sans-serif;\n    cursor: default;\n}\n\n#aboutCard > p:nth-of-type(2), \n#aboutCard > p:nth-of-type(3), \n#aboutCard > p:nth-of-type(4) {\n    color: white;\n    word-break: normal;\n    white-space: normal;\n    text-align: center;\n    font-size: 20px;\n    width: 300px;\n    margin: 0;\n    padding: 0;\n    font-family: 'Coolvetica', sans-serif;\n    cursor: default;\n}\n\niframe {\n    border: 0;\n    border-radius: 20px;\n    margin: 20px 0 50px 0;\n    width: 50vw;\n    max-width: 400px;\n    height: 50vw;\n    max-height: 400px;\n}\n\nfooter {\n    color: white;\n    background-color: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d81d0e1fdbd5f69b232.otf";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45127c359e19756b99cc.otf";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35583e105e923052dd10.jpg";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderInitial = () => {
    renderHeader();
    renderMain();
    renderFooter();
}

const renderHeader = () => {
    const content = document.getElementById('content');
    //Create header element:
    const header = document.createElement('header');

    //Create page title & change text content
    const title = document.createElement('h1');
    title.textContent = 'OKINII';

    //Create ul element
    const navBar = document.createElement('ul');
    //Create li
    const homeBtn = document.createElement('li');
    homeBtn.textContent = 'Home';
    homeBtn.setAttribute('id', 'homeButton');
    //Create li
    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    menuBtn.setAttribute('id', 'menuButton');
    //Create li
    const aboutBtn = document.createElement('li');
    aboutBtn.textContent = 'About';
    aboutBtn.setAttribute('id', 'aboutButton');

    //Append the three li's to the ul:
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(aboutBtn);

    //Append the h1 to the header:
    header.appendChild(title);
    //Append the ul to the header:
    header.appendChild(navBar)
    //Append the header to the div#content
    content.appendChild(header);
}

const renderMain = () => {
    const content = document.getElementById('content');
    const main = document.createElement('main');

    //Append the main to the div#content
    content.appendChild(main);
}

const renderFooter = () => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');

    const copyrightInfo = document.createElement('p');
    copyrightInfo.innerHTML = 'copyright &copy; 2022 justin-gallo';

    footer.appendChild(copyrightInfo);
    content.appendChild(footer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderInitial);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderHomeContent = () => {
    const main = document.querySelector('main');

    const homeCard = document.createElement('div');
    homeCard.setAttribute('id', 'homeCard');

    const mainText = document.createElement('p');
    mainText.textContent = `NYC'S FINEST GOURMET SUSHI`;

    const subText = document.createElement('p');
    subText.textContent = 'Visit us or order online!';

    const orderBtn = document.createElement('button');
    orderBtn.setAttribute('id', 'orderBtn');
    orderBtn.textContent = 'ORDER NOW';

    //Append homeCard children to homeCard
    homeCard.appendChild(mainText);
    homeCard.appendChild(subText);
    homeCard.appendChild(orderBtn);

    //Append homeCard to parent main
    main.appendChild(homeCard);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomeContent);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_sushiIcon1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _images_sushiIcon2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _images_sushiIcon3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _images_sushiIcon4_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _images_sushiIcon7_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _images_sushiIcon8_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);







const createMenuCard = () => {
    const main = document.querySelector('main');

    const menuCard = document.createElement('div');
    menuCard.setAttribute('id', 'menuCard');

    main.appendChild(menuCard);
}

const createMenuGrid = () => {
    const menuCard = document.getElementById('menuCard');

    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('id', 'menuGrid');

    menuCard.appendChild(menuGrid);
}

const createMenuItem = (src, alt, title, description) => {
    const menuGrid = document.getElementById('menuGrid');
    
    //Create the empty menu item:
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    //Create children for each menu item:
    const image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('alt', alt);

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = title;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    //Append img, h3, and p to the parent .menuItem:
    menuItem.appendChild(image);
    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDescription);

    //Append the .menuItem to parent #menuGrid
    menuGrid.appendChild(menuItem);
}

const renderMenuContent = () => {
    //Create the menu card, then menu grid as a child:
    createMenuCard();
    createMenuGrid();

    //Create each menu item individually:
    createMenuItem(_images_sushiIcon1_svg__WEBPACK_IMPORTED_MODULE_0__, 'Sushi Image', 'Spicy Crab Roll - $7', 'Spicy kani crab wrapped in nori seaweed sheets and vinegared rice.');
    createMenuItem(_images_sushiIcon2_svg__WEBPACK_IMPORTED_MODULE_1__, 'Sushi Image', 'California Roll - $7', 'Cucumber, crab and avocado wrapped in vinegared rice.');
    createMenuItem(_images_sushiIcon3_svg__WEBPACK_IMPORTED_MODULE_2__, 'Sushi Image', 'Tuna Roll - $6', 'Sashimi-grade tuna wrapped in nori seaweed and vinegared rice.');
    createMenuItem(_images_sushiIcon4_svg__WEBPACK_IMPORTED_MODULE_3__, 'Sushi Image', 'Salmon Hand Roll - $12', 'Spicy baked salmon, avocado and seasoned rice, hand-wrapped in nori seaweed. ');
    createMenuItem(_images_sushiIcon7_svg__WEBPACK_IMPORTED_MODULE_4__, 'Sushi Image', 'Prawn Nigiri - $3', 'Vinegared rice topped with a cooked king prawn.');
    createMenuItem(_images_sushiIcon8_svg__WEBPACK_IMPORTED_MODULE_5__, 'Sushi Image', 'Tamago Nigiri - $3', 'Vinegared rice topped with tamagosushi (egg).');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuContent);

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "240ba16b689d89a8e447.svg";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cd38de585bbe9d0d2e6.svg";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4c9d18e7c346682de09.svg";

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7c8cf670caacccdd197.svg";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "215d9e2cceb7f2cc766a.svg";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edba0312aba549f62af6.svg";

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAboutCard = () => {
    const main = document.querySelector('main');

    const aboutCard = document.createElement('div');
    aboutCard.setAttribute('id', 'aboutCard');

    main.appendChild(aboutCard);
}

const createAboutContent = () => {
    const aboutCard = document.getElementById('aboutCard');
    
    const aboutText = document.createElement('p');
    aboutText.textContent = `Visit us in NYC's Greenwich Village!`;

    const aboutLocation = document.createElement('p');
    aboutLocation.textContent = `Located at:`;

    const aboutStreet = document.createElement('p');
    aboutStreet.textContent = `216 Thompson St.`;

    const aboutCity = document.createElement('p');
    aboutCity.textContent = `New York, NY 10012`;

    const googleMap = document.createElement('iframe');
    googleMap.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.02267530382!2d-74.00773630690283!3d40.72889747089827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25991c0f50a25%3A0x4ff4555ccb034f0f!2sOkinii!5e0!3m2!1sen!2sus!4v1650138560119!5m2!1sen!2sus');
    googleMap.setAttribute('allowfullscreen', '');
    googleMap.setAttribute('loading', 'lazy');
    googleMap.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    aboutCard.appendChild(aboutText);
    aboutCard.appendChild(aboutLocation);
    aboutCard.appendChild(aboutStreet);
    aboutCard.appendChild(aboutCity);
    aboutCard.appendChild(googleMap);
}

const renderAboutContent = () => {
    createAboutCard();
    createAboutContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutContent);

/***/ })
/******/ 	]);
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);






//Initial render on load: renders the initial page layout and then the home card layout
(0,_initial__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

// //When clicking on an item in the navigation menu, the 'main' DOM element will be cleared, and the corresponding page 'card' will be rendered.
const mainElement = document.querySelector('main');

const clearAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');
const orderBtn = document.getElementById('orderBtn');

homeButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

    //Re-find orderBtn button after it is rendered
    const orderBtn = document.getElementById('orderBtn');

    //Re-assign orderBtn's event listener
    orderBtn.addEventListener('click', function() {
        clearAllChildNodes(mainElement);
        (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
});

menuButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

orderBtn.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

aboutButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    (0,_about__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;