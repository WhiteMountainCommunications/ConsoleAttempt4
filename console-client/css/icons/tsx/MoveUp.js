"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMoveUp = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px;border-left:2px solid;border-right:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;left:2px;bottom:0;width:2px;height:12px}&::after{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:5px solid;top:-7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px;border-left:2px solid;border-right:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;left:2px;bottom:0;width:2px;height:12px}&::after{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:5px solid;top:-7px}\n"])));
exports.MoveUp = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMoveUp, tslib_1.__assign({}, props, { ref: ref, "icon-role": "move-up" }))));
});
var templateObject_1;
//# sourceMappingURL=MoveUp.js.map