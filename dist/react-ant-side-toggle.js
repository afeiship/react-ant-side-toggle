!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["antd","classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactAntSideToggle=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactAntSideToggle=t(e.antd,e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,n,r,o,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(7),d=r(p),v=n(6),y=r(v),b=n(3),h=r(b),m=n(4),g=r(m),j=n(5),_=(r(j),n(2)),x=(c=s=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onClick=function(e){var t=n.state.value,r=n.props.onChange,o={value:!t};n.setState(o,function(){r({target:o})})},n.state={value:e.value},n}return i(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.setState({value:t})}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.children,o(e,["className","children"])),r=this.state.value;return d.default.createElement("button",l({},n,{onClick:this._onClick,className:(0,h.default)("react-ant-side-toggle",t)}),d.default.createElement(_.Icon,{type:r?"menu-unfold":"menu-fold"}))}}]),t}(p.PureComponent),s.propTypes={className:y.default.string,value:y.default.bool,onChange:y.default.func},s.defaultProps={value:!1,onChange:g.default},c);t.default=x},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-ant-side-toggle.js.map