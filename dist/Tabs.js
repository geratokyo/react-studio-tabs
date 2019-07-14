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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var bem_class_gen_1 = require("bem-class-gen");
var cls = bem_class_gen_1.B();
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(p) {
        var _this = _super.call(this, p) || this;
        _this.onInitialTabChange = function () {
            _this.props.onInitialTabChange && _this.props.onInitialTabChange(_this.state.currentTabIdx);
        };
        _this.afterTabChange = function (prevIdx) {
            _this.props.afterTabChange && _this.props.afterTabChange(_this.state.currentTabIdx, prevIdx);
        };
        _this.setTab = function (idx) {
            _this.props.onTabClicked(idx, _this.state.currentTabIdx);
            _this.setState({
                currentTabIdx: idx
            });
        };
        _this.getTitle = function (title) {
            if (/^/.test(title)) {
                return React.createElement("span", { dangerouslySetInnerHTML: { __html: title } });
            }
            else if (typeof title === "string") {
                return React.createElement("span", null, title);
            }
            else if (React.isValidElement(title)) {
                return title;
            }
        };
        _this.state = {
            currentTabIdx: 0
        };
        return _this;
    }
    Tabs.getDerivedStateFromProps = function (props, state) {
        cls.bl(props.bemClassName);
        return null;
    };
    Tabs.prototype.componentDidMount = function () {
        this.setState({
            currentTabIdx: this.props.initialTab || 0
        });
    };
    Tabs.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (nextProps.initialTab !== this.props.initialTab) {
            this.onInitialTabChange();
            this.setState({
                currentTabIdx: nextProps.initialTab
            });
        }
    };
    Tabs.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.initialTab !== this.props.initialTab) {
            this.afterTabChange(prevState.currentTabIdx);
        }
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var props = this.props, state = this.state;
        return (React.createElement("div", { className: cls.bem + " " + props.className },
            React.createElement("ul", { className: cls.el('menu').bem + " " + props.ulClassName }, React.Children.map(this.props.children, function (x, i) {
                return React.createElement("li", { className: cls.el("item").bem + " " + props.liClassName + " " + (state.currentTabIdx === i ? cls.el("item").mod("active").bem : ""), onClick: function () { _this.setTab(i); } }, _this.getTitle(x.props.title));
            })),
            React.createElement("div", { className: cls.el("content").bem + " " + props.contentClassName }, !props.isSeoFriendly &&
                this.props.children[state.currentTabIdx]
                ||
                    React.Children.map(this.props.children, function (child, i) {
                        return React.cloneElement(child, __assign({}, child.props, { style: { "display": (state.currentTabIdx === i ? "block" : "none") } }));
                    }))));
    };
    Tabs.defaultProps = {
        onTabClicked: function () { },
        onInitialTabChange: function () { },
        afterTabChange: function () { },
        bemClassName: "tabs",
        ulClassName: "",
        className: "",
        contentClassName: "",
        liClassName: "",
        isSeoFriendly: false
    };
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map