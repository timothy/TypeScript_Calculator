/**
 * This is a basic calculator written in TypeScript.
 * You can test this app out by running the app.js file in the js folder using Node.js
 * Or by compiling the TypeScript file app.ts into a compatible js and running that using Node.js
 */
enum Symbol { equals, multiply, divide, subtract, add }

/**
 * Calculator
 */
class Calculator {

    private swtc: number = 0;
    private num: number = 0;
    private Total: number = 0;

    public result: number = this.Total;
    public calcNumber: string = '';

    public static author: string = "Timothy";
    public static about: string = "This is a simple Calculator. It does not follow the order of operations rule...\nif you do addition followed by multiplication it will add then multiply..\n";

    constructor() {
        console.log("\nWelcome, you are using Tim's Calculator\n    Hope you enjoy it\n");
    }

    numberPress(theNumber: number): void {
        this.num *= 10;
        this.num += theNumber;
        this.calcNumber += theNumber.toString();
    }

    operationPress(theOperation: string, new_swtc: number): void {
        if (this.Total == 0) {
            this.Total = this.num;
        }
        else {
            switch (this.swtc) {
                case Symbol.multiply:
                    this.Total *= this.num;// multiply
                    break;
                case Symbol.divide:
                    this.Total /= this.num;// divide
                    break;
                case Symbol.subtract:
                    this.Total -= this.num;// subtract
                    break;
                case Symbol.add:
                    this.Total += this.num;// add
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
    }

    clearPress(): void {
        this.swtc = 0;
        this.num = 0;
        this.Total = 0;
        this.result = 0;
        this.calcNumber = "";
    }

    private static isSymbol(item: string): number {
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
    }

    calculateString(equatingStr: string): void {
        let shouldSum: boolean = false;
        let equatingArr = equatingStr.split(/(=|\+|\-|\*|\/)/);

        equatingArr.forEach((val) => {
            if (val === '=') {
                shouldSum = true;
            }
            if (Calculator.isSymbol(val) >= 0) {
                this.operationPress(val, Calculator.isSymbol(val));
            } else if (parseInt(val)) {
                this.numberPress(parseInt(val));
            }
        });
        if (shouldSum) {
            console.log(this.calcNumber);
        } else {
            console.log(`Your equation is ${this.calcNumber}\nYour Total after all calculations = ${this.Total}`)
        }
        this.clearPress();
    }
}
//**********************Test code below*************************************

let test = new Calculator();

console.log(`Author name: ${Calculator.author}\n${Calculator.about}`);

test.calculateString('50+30-19*70/400=');
console.log("");
test.calculateString('50+30-19*71/400');