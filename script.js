document.getElementById('btn').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('ip').value);

    // Promise to resolve after 2 seconds with the input number
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    });

    promise1.then(number => {
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number * 2);
            }, 1000);
        });
    }).then(number => {
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number - 3);
            }, 1000);
        });
    }).then(number => {
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number / 2);
            }, 1000);
        });
    }).then(number => {
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number + 10);
            }, 1000);
        });
    }).then(finalResult => {
        document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    });
});