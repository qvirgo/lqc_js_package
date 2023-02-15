import Big from 'big.js';

export default {
    plus,
    minus,
    mul,
    div,
    muldiv,
    divmul,
    distribute,
    sum,
    cmp,
    toFixedString,
    toFixedNumer
};

/**
 * Addition: x + y
 * @param {*} x number|string
 * @param {*} y number|string
 * @returns {number}
 */
function plus(x, y) {
    var x = new Big(x), y = new Big(y);
    return x.plus(y).toNumber();
}

/**
 * Subtraction: x - y
 * @param {*} x number|string
 * @param {*} y number|string
 * @returns {number}
 */
function minus(x, y) {
    var x = new Big(x), y = new Big(y);
    return x.minus(y).toNumber();
}

/**
 * Multiplication: x * y
 * @param {*} x number|string
 * @param {*} y number|string
 * @param {*} p decimal places, default 2
 * @returns {number}
 */
function mul(x, y, p = 2) {
    var x = new Big(x), y = new Big(y);
    return +x.times(y).toFixed(p);
}

/**
 * Division: x / y
 * @param {*} x number|string
 * @param {*} y number|string
 * @param {*} p decimal places, default 2
 * @returns {number}
 */
function div(x, y, p = 2) {
    var x = new Big(x), y = new Big(y);
    return +x.div(y).toFixed(p);
}

/**
 * First Multiplication then Division: x * y / z
 * @param {*} x number|string
 * @param {*} y number|string
 * @param {*} z number|string
 * @param {*} p decimal places, default 2
 * @returns {number}
 */
function muldiv(x, y, z, p = 2) {
    var x = new Big(x), y = new Big(y), z = new Big(z);
    return +x.times(y).div(z).toFixed(p);
}

/**
 * First Division then Multiplication: x / y * z
 * @param {*} x number|string
 * @param {*} y number|string
 * @param {*} z number|string
 * @param {*} p decimal places, default 2
 * @returns {number}
 */
function divmul(x, y, z, p = 2) {
    var x = new Big(x), y = new Big(y), z = new Big(z);
    return +x.div(y).times(z).toFixed(p);
}

/**
 * Distribution: distribute the amount evenly
 * @param {*} s number|string
 * @param {*} n integer greater than 1
 * @param {*} p decimal places, default 2
 * @returns {array}
 */
function distribute(s, n, p = 2) {
    if (false === Number.isSafeInteger(n) || n <= 1) {
        throw Error("invalid input");
    }

    var s = new Big(s);
    var avg = s.div(n);

    var distribution = [];
    for (; n !== 1; n--) {
        distribution.push(+avg.toFixed(p));
    }

    distribution.push(s.minus(avg.times(n-1)).toNumber());

    return distribution;
}

/**
 * Sum: sum all numbers in an array
 * @param {*} arr Array
 * @returns {number}
 */
function sum(arr) {
    if (false === Array.isArray(arr) || arr.length <= 0) {
        throw Error("invalid input");
    }

    var i = 1;
    var sum = new Big(arr[0]);
    for (; i < args.length;) {
        sum = sum.plus(arr[i++]);
    }
    return sum.toNumber();
}

/**
 * Compare two amounts
 * @param {*} x number|string
 * @param {*} y number|string
 * @returns 1, if x is greater than y
 * @returns -1, if x is less than y
 * @returns 0, if x and y have the same value
 */
function cmp(x, y) {
    var x = new Big(x), y = new Big(y);
    return x.cmp(y);
}

/**
 * Format amount to a fixed String with p decimal places
 * @param {*} x number|string
 * @param {*} p decimal places, default 2
 * @returns {string}
 */
function toFixedString(x, p = 2) {
    return new Big(x).toFixed(p);
}

/**
 * Format amount to a fixed Number of p decimal places
 * @param {*} x number|string
 * @param {*} p decimal places, default 2
 * @returns {number}
 */
function toFixedNumer(x, p = 2) {
    return +new Big(x).toFixed(p);
}