/**
 * This is a basic calculator written in TypeScript.
 * You can test this app out by running the app.js file in the js folder using Node.js
 * Or by compiling the TypeScript file app.ts into a compatible js and running that using Node.js
 */
var Symbol;
(function (Symbol) {
    Symbol[Symbol["equals"] = 0] = "equals";
    Symbol[Symbol["multiply"] = 1] = "multiply";
    Symbol[Symbol["divide"] = 2] = "divide";
    Symbol[Symbol["subtract"] = 3] = "subtract";
    Symbol[Symbol["add"] = 4] = "add";
})(Symbol || (Symbol = {}));
/**
 * Calculator
 */
var Calculator = (function () {
    function Calculator() {
        this.swtc = 0;
        this.num = 0;
        this.Total = 0;
        this.result = this.Total;
        this.calcNumber = '';
        console.log("\nWelcome, you are using Tim's Calculator\n    Hope you enjoy it\n");
    }
    Calculator.prototype.numberPress = function (theNumber) {
        this.num *= 10;
        this.num += theNumber;
        this.calcNumber += theNumber.toString();
    };
    Calculator.prototype.operationPress = function (theOperation, new_swtc) {
        if (this.Total == 0) {
            this.Total = this.num;
        }
        else {
            switch (this.swtc) {
                case Symbol.multiply:
                    this.Total *= this.num; // multiply
                    break;
                case Symbol.divide:
                    this.Total /= this.num; // divide
                    break;
                case Symbol.subtract:
                    this.Total -= this.num; // subtract
                    break;
                case Symbol.add:
                    this.Total += this.num; // add
                    break;
                default:
                    break;
            }
        }
        this.calcNumber += theOperation;
        if (theOperation === "=") {
            this.calcNumber += this.Total.toString();
        }
        this.result = this.Total;
        this.swtc = new_swtc;
        this.num = 0;
    };
    Calculator.prototype.clearPress = function () {
        this.swtc = 0;
        this.num = 0;
        this.Total = 0;
        this.result = 0;
        this.calcNumber = "";
    };
    Calculator.isSymbol = function (item) {
        switch (item) {
            case '*':
                return Symbol.multiply;
            case '/':
                return Symbol.divide;
            case '-':
                return Symbol.subtract;
            case '+':
                return Symbol.add;
            case '=':
                return Symbol.equals;
            default:
                return -1;
        }
    };
    Calculator.prototype.calculateString = function (equatingStr) {
        var _this = this;
        var shouldSum = false;
        var equatingArr = equatingStr.split(/(=|\+|\-|\*|\/)/);
        equatingArr.forEach(function (val) {
            if (val === '=') {
                shouldSum = true;
            }
            if (Calculator.isSymbol(val) >= 0) {
                _this.operationPress(val, Calculator.isSymbol(val));
            }
            else if (parseInt(val)) {
                _this.numberPress(parseInt(val));
            }
        });
        if (shouldSum) {
            console.log(this.calcNumber);
        }
        else {
            console.log("Your equation is " + this.calcNumber + "\nYour Total after all calculations = " + this.Total);
        }
        this.clearPress();
    };
    Calculator.author = "Timothy";
    Calculator.about = "This is a simple Calculator. It does not follow the order of operations rule...\nif you do addition followed by multiplication it will add then multiply..\n";
    return Calculator;
}());
//**********************Test code below*************************************
var test = new Calculator();
console.log("Author name: " + Calculator.author + "\n" + Calculator.about);
test.calculateString('50+30-19*70/400=');
console.log("");
test.calculateString('50+30-19*71/400');
//# sourceMappingURL=app.js.map