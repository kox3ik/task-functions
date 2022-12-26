export function higherThan(num) {
    return function (n) {
        return n > num;
    };
}

export function hasSubstring(substr) {
    return function (n) {
        return n.includes(substr);
    };
}

export function multiply(num) {
    return function (n) {
        return n * num;
    };
}
