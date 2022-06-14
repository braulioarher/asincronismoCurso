const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Beofore');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomething();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('Beofore');
anotherFunction();
console.log('After');