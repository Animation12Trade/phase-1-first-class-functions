function receivesAFunction(callback) {
    callback('const spy = chai.spy();');
}

function returnsANamedFunction() {
    function namedFunction() {

    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {

    };
}