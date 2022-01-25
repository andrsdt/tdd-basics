"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = { element: null, next: null };
    }
    Object.defineProperty(Stack.prototype, "peek", {
        get: function () {
            return this.top.element;
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.push = function (e) {
        this.top.next = {
            element: this.top.element,
            next: this.top.next,
        };
        this.top.element = e;
    };
    Stack.prototype.pop = function () {
        var _a, _b, _c, _d;
        var toPop = this.top.element;
        this.top = {
            element: (_b = (_a = this.top.next) === null || _a === void 0 ? void 0 : _a.element) !== null && _b !== void 0 ? _b : null,
            next: (_d = (_c = this.top.next) === null || _c === void 0 ? void 0 : _c.next) !== null && _d !== void 0 ? _d : null,
        };
        return toPop;
    };
    return Stack;
}());
exports.Stack = Stack;
