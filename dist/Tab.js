"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.getTitle = function () {
            return _this.props.title;
        };
        return _this;
    }
    Tab.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return React.createElement("div", { className: "tab-panel " + props.className, "data-tab-title": this.props.title }, this.props.children);
    };
    Tab.defaultProps = {
        className: ""
    };
    return Tab;
}(React.Component));
exports.Tab = Tab;
//# sourceMappingURL=Tab.js.map