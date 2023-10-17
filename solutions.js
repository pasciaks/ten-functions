"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(value) {
    let result = (value === true)
    console.log(`isTrue on (${value}) is ${result}`);
    return result;
}

function isFalse(value) {
    return value == false;

}

function not(value) {
    return !value;
}

function addOne(num) {
    if (isNaN(num)) {
        return num;
    } else {
        return Number(num) + 1;
    }
}

function isEven(num) {
    if ((num % 2) === 0) {
        // is even
        return true;
    }
    return false;
}

function isIdentical(i1,i2){
    return i1===i2;
}

function isEqual(i1,i2) {
    return ((i1==i2) && (i1!==i2));
}

function or(i1,i2) {
    return (i1 || i2);
}

function and(i1,i2) {
    return (i1 && i2);
}

function concat(i1,i2) {
    if (typeof i1 === typeof i2 &&  typeof i1 === 'string') {
        return i1 + i2;
    } else  {
        return i1.toString() + i2.toString();
    }

}