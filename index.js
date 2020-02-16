// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object
}

function deleteFromDriverByKey(object, key) {
    let result = Object.assign({}, object);
    delete result[key];
    return result
}

function destructivelyDeleteFromDriverByKey(object, key, value) {
    delete object[key];
    return object
}