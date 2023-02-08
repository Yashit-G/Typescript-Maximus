"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var first = "hell";
console.log("1) ", first);
var first2 = 2;
console.log("2) ", first2);
var first3 = true;
console.log("3) ", first3);
var first4 = [];
var firts5 = ["hello"];
console.log("4) ", first4);
console.log("5) ", firts5);
var firts6 = [
    new Date(),
    1000,
    "this is the example of tuple",
];
console.log("6) ", firts6);
var Direction;
(function (Direction) {
    Direction["Yes"] = "The employee came for the job is passed";
    Direction["No"] = "The employee came for the job is failed";
    Direction["Other"] = "Nikl teri koi jgh nhi";
})(Direction || (Direction = {}));
console.log("output for seeing how enum looks when we console it", Direction);
function interviewRound(employeeName, statement) {
    var array = ["Yashit", "Shanaya"];
    if (employeeName === array[0]) {
        return "".concat(statement);
    }
    else if (employeeName === array[1]) {
        return "".concat(statement);
    }
    else {
        return "".concat(statement);
    }
}
console.log("7) ", interviewRound("Yashit", Direction.Yes));
console.log("7) ", interviewRound("Shanaya", Direction.No));
console.log("7) ", interviewRound("Karan", Direction.Other));
var first8 = "Hi my name is YASHIT 😏";
console.log("8) ", first8);
//Now let's start how can i play with the types
var first9 = "In this way i can give two types to a single constant";
console.log("9) ", first9);
var first10 = new Date();
console.log("10) ", first10);
var first11 = [
    "you can give types like this also",
    new Date(),
    "end for the types topic",
];
console.log("11) ", first11);
//CLASSES
var hell = /** @class */ (function () {
    function hell() {
        this.number = 2;
    }
    hell.prototype.beneficiaryCondition = function () {
        console.log("Critical");
    };
    return hell;
}());
var moveToNewAccount = /** @class */ (function (_super) {
    __extends(moveToNewAccount, _super);
    function moveToNewAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    moveToNewAccount.prototype.beneficiaryName = function () {
        console.log("Shanaya");
    };
    moveToNewAccount.prototype.beneficiaryAge = function () {
        console.log("18");
    };
    moveToNewAccount.prototype.beneficiaryIQ = function () {
        console.log("0");
    };
    return moveToNewAccount;
}(hell));
var beneficiary = new moveToNewAccount();
console.log(beneficiary.beneficiaryName(), beneficiary.beneficiaryAge(), beneficiary.beneficiaryIQ(), beneficiary.beneficiaryCondition());
//TYPEOF
var first12 = { name: "YASHIT" };
console.log("12) ", typeof first12);
var first13 = "yeah";
var savage = first13;
console.log("13) ", typeof savage);
//advance typescript starts from here
//run command tsc -init , for more explanation go to readme.md file
var advanceTs = /** @class */ (function () {
    function advanceTs() {
        //first comment off these variables with type and see what error it throws
        //num : number
        //str : string
        this.numb = 3;
        this.str = "YASHIT";
    }
    //first comment off this function with no type given to the parameter and see what error it throws
    // method(response) {}
    advanceTs.prototype.method = function (response) {
        return response;
    };
    return advanceTs;
}());
