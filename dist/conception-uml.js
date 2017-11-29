(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.APIPosition = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require("./Component");

var _apiPositionTemplate = require("./../template/api-position-template");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APIPosition = exports.APIPosition = function (_Component) {
    _inherits(APIPosition, _Component);

    function APIPosition() {
        _classCallCheck(this, APIPosition);

        var _this = _possibleConstructorReturn(this, (APIPosition.__proto__ || Object.getPrototypeOf(APIPosition)).call(this));

        console.log((0, _apiPositionTemplate.apiPositionTemplate)("Bryan"));

        return _this;
    }

    _createClass(APIPosition, [{
        key: "render",
        value: function render() {}
    }]);

    return APIPosition;
}(_Component2.Component);

},{"./../template/api-position-template":4,"./Component":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = exports.Component = function Component() {
    _classCallCheck(this, Component);

    console.log("Component:constructor");
};

},{}],3:[function(require,module,exports){
"use strict";

var _APIPosition = require("./component/APIPosition");

new _APIPosition.APIPosition();

},{"./component/APIPosition":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var apiPositionTemplate = exports.apiPositionTemplate = function apiPositionTemplate(variable) {

    return "\n\n        Hello " + variable + "\n\n    ";
};

},{}]},{},[3]);
