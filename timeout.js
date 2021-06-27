function doSomething() {
    console.log(3333);
}

console.log(1111);
console.log(2222);
setTimeout(doSomething, 10000)
setInterval(() => {
    console.log('doing it again');
}, 500);
console.log(4444);