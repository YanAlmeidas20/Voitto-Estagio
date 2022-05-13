self["webpackHotUpdate_N_E"]("pages/logic-test",{

/***/ "./src/helpers/logicFunctions/index.ts":
/*!*********************************************!*\
  !*** ./src/helpers/logicFunctions/index.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNoFibonacciNumber": function() { return /* binding */ getNoFibonacciNumber; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var getNoFibonacciNumber = function getNoFibonacciNumber(n) {
  var n1 = 0,
      n2 = 1,
      n3 = 2;
  var resultado = 0;

  while (n > 0) {
    n1 = n2;
    n2 = n3;
    n3 = n1 + n3;
    n = n - (n3 - n2 - 1);
  }

  resultado = n2 + (n + (n3 - n2 - 1));
  return resultado; //to do
}; // resolução 1

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvbG9naWNGdW5jdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOlsiZ2V0Tm9GaWJvbmFjY2lOdW1iZXIiLCJuIiwibjEiLCJuMiIsIm4zIiwicmVzdWx0YWRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsQ0FBRCxFQUF1QjtBQUN6RCxNQUFJQyxFQUFFLEdBQUcsQ0FBVDtBQUFBLE1BQVlDLEVBQUUsR0FBRyxDQUFqQjtBQUFBLE1BQW9CQyxFQUFFLEdBQUcsQ0FBekI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsU0FBTUosQ0FBQyxHQUFHLENBQVYsRUFBWTtBQUNWQyxNQUFFLEdBQUdDLEVBQUw7QUFBVUEsTUFBRSxHQUFHQyxFQUFMO0FBQVNBLE1BQUUsR0FBR0YsRUFBRSxHQUFDRSxFQUFSO0FBQ25CSCxLQUFDLEdBQUdBLENBQUMsSUFBSUcsRUFBRSxHQUFDRCxFQUFILEdBQU0sQ0FBVixDQUFMO0FBQ0Q7O0FBQ0RFLFdBQVMsR0FBR0YsRUFBRSxJQUFJRixDQUFDLElBQUlHLEVBQUUsR0FBQ0QsRUFBSCxHQUFNLENBQVYsQ0FBTCxDQUFkO0FBQ0EsU0FBT0UsU0FBUCxDQVJ5RCxDQVN6RDtBQUNELENBVk0sQyxDQVdQIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2ljLXRlc3QuY2EzMDMwMmVhMjcwMDcxNjg4NmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXROb0ZpYm9uYWNjaU51bWJlciA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gIGxldCBuMSA9IDAsIG4yID0gMSwgbjMgPSAyO1xyXG4gIGxldCByZXN1bHRhZG8gPSAwO1xyXG4gIHdoaWxlKG4gPiAwKXtcclxuICAgIG4xID0gbjI7ICBuMiA9IG4zOyBuMyA9IG4xK24zO1xyXG4gICAgbiA9IG4gLSAobjMtbjItMSk7XHJcbiAgfVxyXG4gIHJlc3VsdGFkbyA9IG4yICsgKG4gKyAobjMtbjItMSkpO1xyXG4gIHJldHVybiByZXN1bHRhZG87XHJcbiAgLy90byBkb1xyXG59O1xyXG4vLyByZXNvbHXDp8OjbyAxIl0sInNvdXJjZVJvb3QiOiIifQ==