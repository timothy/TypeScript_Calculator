# TypeScript Calculator
Simple TypeScript Calculator. Note when testing remember this does not follow order of operations.
## Synopsis

This is a simple calculator application written using the TypeScript programming language. This calculator does not yet have the capabilities for following the mathematical order of operations.

It will add, subtract, multiply or divide a string containing numbers and basic math symbols in the order given by the user.

In the below example the number five and three will be added first (5+3=8) followed by the subtraction of two (8-2=6), multiplied by four (6*4=24) and lastly divided by eight (24/8=3). The end result is 3. 

Example: "5+3-2*4/8" = 3

When the above example follows order of operations "5+3-((2*4)/8)" it equates to 7. The fact that this calculator does not support order of operations should be taken into consideration when checking expected results.
## Code Example

Below is an example of using the TypeScript calculator.

      let test = new Calculator();
      
      console.log(`Author name: ${Calculator.author}\n${Calculator.about}`);
      
      test.calculateString('50+30-19*70/400=');
      console.log("");
      test.calculateString('50+30-19*71/400');

## Motivation

I started working with TypeScript and learning a lot of the different features it has to offer. I wanted to test out the skills I learned with a practical application. I did not have too much time to do anything in-depth but thought I might add more to this project later when time allows.
## Installation

In order to use this TypeScript calculator it needs to be compiled into JavaScript. Below is a simple way to do this using the node package manager (npm). 

Step 1:

Install node.js for your system. Then In the command prompt or terminal enter the following.

    npm install -g typescript
Step 2:

Navigate to the file directory of the TypeScript calculator ts file using the command prompt/terminal. Then execute the following in the command prompt/terminal.

    tsc app.ts

## Tests
No official tests have been written at this time. The only tests were manually passing strings and checking if the desired value is given.

Please feel free to create a pull request adding some tests in. This is an open source project and I do not mind people playing around with the code or adding in tests.

## Contributors
So far just me @timothy.

To anyone who would like, feel free to make a pull request to update or add new features! This is really just something for fun. If you have some working code you that you think would add to the coolness of this app please feel free.
Just a side note please test your code well before making a pull request. I will most likely test it out as well but I really do not like testing code just to find a bunch of blatant bugs and then denying the pull request… If there are bug I will likely give you the details of what I found and some good ideas of how to fix it. Thanks!
