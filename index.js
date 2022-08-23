function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction(){
    return () => {console.log('This is the way')}
}
