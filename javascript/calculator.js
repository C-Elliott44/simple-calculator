var numOne = '';
var numTwo = '';
var oneReady = true;
var twoReady = false;
var operator = '';

function add () {
    if (oneReady === true && twoReady === false) {
        operator = '+';
        oneReady = false;
        twoReady = true;
        calcView('');
        prevDisplay();
    } else if (oneReady === false && twoReady === true) {
        operator = "+";
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne + intNumTwo).toPrecision(3);
        calcView(total);
        prevDisplay();
        numOne = total;
        numTwo = '';
        oneReady = false;
        twoReady = true;
    }
}

function subtract () {
    if (oneReady === true && twoReady === false) {
        operator = '-';
        oneReady = false;
        twoReady = true;
        calcView('');
        prevDisplay();
    } else if (oneReady === false && twoReady === true) {
        operator = "-";
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne - intNumTwo).toPrecision(3);
        prevDisplay();
        calcView(total);
        numOne = total;
        numTwo = '';
        oneReady = false;
        twoReady = true;
    }
}

function multiple () {
    if (oneReady === true && twoReady === false) {
        operator = '*';
        oneReady = false;
        twoReady = true;
        calcView('');
        prevDisplay();
    } else if (oneReady === false && twoReady === true) {
        operator = "*";
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne * intNumTwo).toPrecision(3);
        calcView(total);
        prevDisplay();
        numOne = total;
        numTwo = '';
        oneReady = false;
        twoReady = true;
    }
}

function divide () {
    if (oneReady === true && twoReady === false) {
        operator = '/';
        oneReady = false;
        twoReady = true;
        calcView('');
        prevDisplay();
    } else if (oneReady === false && twoReady === true) {
        operator = "/";
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne / intNumTwo).toPrecision(3);
        calcView(total);
        prevDisplay();
        numOne = total;
        numTwo = '';
        oneReady = false;
        twoReady = true;
    }
}

// Sets number from being positive to Negative
function invert () {
    if (numOne.includes('-') === false && oneReady === true) {
        var calcCopy = '-' + numOne;
        numOne = calcCopy;
        calcView(numOne);
        prevDisplay();
    } else if (oneReady === true) {
        var calcCopy = numOne.replace('-', '');
        numOne = calcCopy;
        calcView(numOne);
        prevDisplay();
    } else if (numTwo.includes('-') === false && twoReady === true) {
        var calcCopy = '-' + numTwo;
        numTwo = calcCopy;
        calcView(numTwo);
    } else if (twoReady === true) {
        var calcCopy = numTwo.replace('-', '');
        numTwo = calcCopy;
        calcView(numTwo);
        prevDisplay();
    }
}

// Clears the newest addition to the string
function backspace () {
    if (numOne !== '' && oneReady === true) {
        calcCopy = numOne.slice(0, numOne.length-1);
        numOne = calcCopy;
        calcView(numOne);
        prevDisplay();
    } else if (numTwo !== '' && twoReady === true) {
        calcCopy = numTwo.slice(0, numTwo.length-1);
        numTwo = calcCopy;
        calcView(numTwo);
        prevDisplay();
    }
}

// Clears both the calculator display and the calculation variable
function refresh () {
    numOne = '';
    numTwo = '';
    total = '';
    oneReady = true;
    twoReady = false;
    operator = '';
    var smallDis = document.getElementById('prevCalc');
    smallDis.innerHTML = ''
    display = document.getElementById('display');
    display.innerHTML = '';
}

function equals () {
    if (numOne !== '' && numTwo !== '' && operator === '+') {
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne + intNumTwo).toPrecision(3);
        numOne = total;
        numTwo = '';
        operator = '=';
        oneReady = true;
        twoReady = false;
        calcView(total);
        prevDisplay();
    } else if (numOne !== '' && numTwo !== '' && operator === '-') {
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne - intNumTwo).toPrecision(3);
        numOne = total;
        numTwo = '';
        operator = '=';
        oneReady = true;
        twoReady = false;
        calcView(total);
        prevDisplay();
    } else if (numOne !== '' && numTwo !== '' && operator === '/') {
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne / intNumTwo).toPrecision(3);
        numOne = total;
        numTwo = '';
        operator = '=';
        oneReady = true;
        twoReady = false;
        calcView(total);
        prevDisplay();
    } else if (numOne !== '' && numTwo !== '' && operator === '*') {
        var intNumOne = parseFloat((numOne));
        var intNumTwo = parseFloat((numTwo));
        total = (intNumOne * intNumTwo).toPrecision(3);
        numOne = total;
        numTwo = '';
        operator = '=';
        oneReady = true;
        twoReady = false;
        calcView(total);
        prevDisplay();
    }
}

// Rules for displaying numbers
function displayNumber (event) {
    if (oneReady === true && event.target.id === 'number' && numOne.length < 20 && operator !== '=') {
        numOne += event.target.innerText;
        calcView(numOne);
        prevDisplay();
    } else if (twoReady === true && event.target.id === 'number' && numTwo.length < 20 && operator !== '=') {
        numTwo += event.target.innerText;
        calcView(numTwo);
        prevDisplay();
    } else if (operator === '=') {
        numOne = '';
        operator = '';
        numOne += event.target.innerText;
        calcView(numOne);
        prevDisplay();
    }
}

// Sets the rule for when you can use a decimal
function displayDecimal (event) {
    if (numOne === '' && oneReady === true) {
        numOne = '0' + event.target.innerText;
        calcView(numOne);
        prevDisplay();
    } else if (oneReady === true && numOne.includes('.') === true && numOne.length < 20) {
        //Do nothing
    } else if (oneReady === true && numOne.includes('.') === false && numOne.length < 20) {
        numOne += event.target.innerText;
        calcView(numOne);
        prevDisplay();
    } else if (numTwo === '' && twoReady === true) {
        numTwo = '0' + event.target.innerText;
        calcView(numTwo);
        prevDisplay();
    } else if (twoReady === true && numTwo.includes('.') === true && numTwo.length < 20) {
        //Do nothing
    } else if (twoReady === true && numTwo.includes('.') === false && numTwo.length < 20) {
        numTwo += event.target.innerText;
        calcView(numTwo);
        prevDisplay();
    }
}

// Generic function to display numbers in calculator window
function calcView (num) {
    var display = document.getElementById('display');
    display.innerHTML = num;
}

function prevDisplay () {
    if (oneReady === true && twoReady === false && operator === '') {
        var smallDis = document.getElementById('prevCalc');
        smallDis.innerHTML = numOne;
    } else if (oneReady === false && twoReady === true && operator !== '') {
        var smallDis = document.getElementById('prevCalc');
        smallDis.innerHTML = numOne + operator + numTwo;
    } else if (oneReady === true && twoReady === false && operator === '=') {
        var smallDis = document.getElementById('prevCalc');
        smallDis.innerHTML = numOne;
    }
}

// Rules for Zeros
function zeros (event) {
    if (oneReady === true && numOne === '') {
        numOne = event.target.innerText + '.';
        calcView(numOne);
        prevDisplay();
    } else if (oneReady === true && numOne !== ''){
        numOne += event.target.innerText;
        calcView(numOne);
        prevDisplay();
    } else if (twoReady === true && numTwo !== ''){
        numTwo += event.target.innerText;
        calcView(numTwo);
        prevDisplay();
    } else if (twoReady === true && numTwo !== ''){
        numTwo += event.target.innerText;
        calcView(numTwo);
        prevDisplay();
    }
}