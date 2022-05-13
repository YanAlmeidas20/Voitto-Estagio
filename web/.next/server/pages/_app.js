(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals */ "./src/styles/globals.ts");


var _jsxFileName = "C:\\Users\\AGILIZE\\Desktop\\DESAFIO VOITTO\\desafio-dev-jr\\web\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globals__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/globals.ts":
/*!*******************************!*\
  !*** ./src/styles/globals.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts) !important;
  }

  html, body, #root {
    width: 100%;
    position: relative;
    background: var(--color-background);
    font-family: var(--fonts) !important;
    scroll-behavior: smooth;
  }

  button, input, a {
    font-family: var(--fonts) !important;
    text-decoration: none;
    cursor: pointer;
  }

  :root {
    font-size: 16px;
    --fonts: 'Poppins', sans-serif;
    --transition: 0.5s ease-in-out;
    --border-radius: 10px;

    --color-primary: #4d5bf9;
    --color-primary-dark: #03045e;
    --color-secondary: #0096c7;
    --color-secondary-dark: #0077b6;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Thin.ttf') format('truetype');
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ThinItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraLight.ttf')
      format('truetype');
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraLightItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-LightItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Italic.ttf') format('truetype');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-MediumItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-SemiBoldItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-BoldItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraBoldItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Black.ttf') format('truetype');
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-BlackItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }

`);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHlzaWNzLWNhbGMtaGFjay8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9waHlzaWNzLWNhbGMtaGFjay8uL3NyYy9zdHlsZXMvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly9waHlzaWNzLWNhbGMtaGFjay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcGh5c2ljcy1jYWxjLWhhY2svZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9waHlzaWNzLWNhbGMtaGFjay9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLE1BQU1BLEtBQXlCLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUM5RCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxrQkFERjtBQU1ELENBUEQ7O0FBU0EsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUVBLCtEQUFlRyxnRUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBN0xBLEU7Ozs7Ozs7Ozs7O0FDRkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJ0Avc3R5bGVzL2dsb2JhbHMnO1xyXG5cclxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cykgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGh0bWwsIGJvZHksICNyb290IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udHMpICFpbXBvcnRhbnQ7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiwgaW5wdXQsIGEge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzKSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgOnJvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1mb250czogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC0tY29sb3ItcHJpbWFyeTogIzRkNWJmOTtcclxuICAgIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjMDMwNDVlO1xyXG4gICAgLS1jb2xvci1zZWNvbmRhcnk6ICMwMDk2Yzc7XHJcbiAgICAtLWNvbG9yLXNlY29uZGFyeS1kYXJrOiAjMDA3N2I2O1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtVGhpbkl0YWxpYy50dGYnKVxyXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtRXh0cmFMaWdodC50dGYnKVxyXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtRXh0cmFMaWdodEl0YWxpYy50dGYnKVxyXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIHNyYzogdXJsKCcvZm9udHMvUG9wcGlucy9Qb3BwaW5zLUxpZ2h0SXRhbGljLnR0ZicpXHJcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBzcmM6IHVybCgnL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBzcmM6IHVybCgnL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIHNyYzogdXJsKCcvZm9udHMvUG9wcGlucy9Qb3BwaW5zLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtTWVkaXVtSXRhbGljLnR0ZicpXHJcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBzcmM6IHVybCgnL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGRJdGFsaWMudHRmJylcclxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIHNyYzogdXJsKCcvZm9udHMvUG9wcGlucy9Qb3BwaW5zLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIHNyYzogdXJsKCcvZm9udHMvUG9wcGlucy9Qb3BwaW5zLUJvbGRJdGFsaWMudHRmJylcclxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIHNyYzogdXJsKCcvZm9udHMvUG9wcGlucy9Qb3BwaW5zLUV4dHJhQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtRXh0cmFCb2xkSXRhbGljLnR0ZicpXHJcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBzcmM6IHVybCgnL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtQmxhY2tJdGFsaWMudHRmJylcclxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcblxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==