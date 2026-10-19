// Question-1 Write a simple JavaScript program to print expected Output using following array.
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 

let myColor = ["Red ", "Green ", "White ", "Black "];
document.getElementById('arr').innerHTML = `myColor = [ ${myColor} ]`;
document.getElementById('color-output-1').innerHTML = `Output-1 = [ ${myColor.join(',')} ]`;
document.getElementById('color-output-2').innerHTML = `Output-2 = [ ${myColor.join('+')} ]`;
myColor.pop();
document.getElementById('color-output-3').innerHTML = `Output-3 = [ ${myColor}]`;
myColor.push('Black');
document.getElementById('color-output-4').innerHTML = `Output-4 = [ ${myColor[0]}]`;
document.getElementById('color-output-5').innerHTML = `Output-5 = [ ${myColor[1]} , ${myColor[2]}]`;
myColor.push("Orange");
document.getElementById('color-output-6').innerHTML = `Output-6 = [ ${myColor}]`;

// Question-2 Write a JavaScript program to get sum of all array element using for loop and foreach loop.
let sumArr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
}
document.getElementById('sumArr').innerHTML = `Array = [ ${sumArr}]`;
document.getElementById('for-output-1').innerHTML = `Sum of Array Element using For loop is => ${sum}`;
sum = 0;
sumArr.forEach(i => { sum += i; });
document.getElementById('for-each-output-1').innerHTML = `Sum of Array Element using ForEach loop is => ${sum}`;

// Question-3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
let arr1 = [22,40,50,90,75];
let max = arr1[0];
document.getElementById('arr1').innerHTML = `Array = [ ${arr1} ]`;
function maxFindvalue(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= max) {
            max = arr1[i];
        }
    }
    document.getElementById('maximum').innerHTML = `Maximum number of array is => ${max}`;
}
maxFindvalue(arr1);
let min = arr1[0];
function minFindvalue(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] <= min) {
            min = arr1[i];
        }
    }
    document.getElementById('minimum').innerHTML = `Minimum number of array is => ${min}`;
}
minFindvalue(arr1);

// Question-4 Write a JavaScript program for convert all array element in ASCII value.
let arr2 = ['a', 'b', 'c', 'd'];
let str_ascii = '';
document.getElementById('ascii-arr').innerHTML = `Array = [ ${arr2} ]`;
for (let i = 0; i < arr2.length; i++) {
    let ascii = arr2[i].charCodeAt(0);
    str_ascii += arr2[i] + "=>" + ascii + "<br/>";
}
document.getElementById('ascii-output').innerHTML = `${str_ascii}`;

// Question-5 Write a JavaScript program for remove negative values using the filter array function.
let arr3 = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById('negetive-arr').innerHTML = `Array = [ ${arr3} ]`;
document.getElementById('negetive-output').innerHTML = `Negetive numbers are => ${arr3.filter(num => num > 0)}`;

// Question-6 Write a JavaScript program using array map() method and return the square of array element.
let mapArr = [2, 5, 6, 3, 8, 9];
document.getElementById('map-arr').innerHTML = `Array = [ ${mapArr} ]`;
document.getElementById('map-square').innerHTML = `Square of array element are => ${mapArr.map(num => num * num)}`;

// Question-7 Write a JavaScript program for sort array in ascending descending.
let sortArr = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
document.getElementById('arr-sort').innerHTML = `Array = [ ${sortArr} ]`;
let num = 0;
for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < sortArr.length - 1; j++) {
        if (sortArr[i] <= sortArr[j]) {
            num = sortArr[i];
            sortArr[i] = sortArr[j];
            sortArr[j] = num;
        }
    }
}
document.getElementById('ascending-sort').innerHTML = `Sorted array of ascending order is => ${sortArr}`;
for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < sortArr.length - 1; j++) {
        if (sortArr[i] >= sortArr[j]) {
            num = sortArr[i];
            sortArr[i] = sortArr[j];
            sortArr[j] = num;
        }
    }
}
document.getElementById('descending-sort').innerHTML = `Sorted array descending order is => ${sortArr}`;

// Question-8 Write a JavaScript program which filters out any string which is less than 8 characters. 
let less_than_8_Arr = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById('less-than-8-arr').innerHTML = `Array = [ ${less_than_8_Arr} ]`;
document.getElementById('less-than-8-output').innerHTML = `element which has less than 8 character => ${less_than_8_Arr.filter(element => element.length > 8)}`;

// Question-9  write a JavaScript program to  to print expected output for following string.
let str1 = "airplane";
document.getElementById('str-1').innerHTML = `Input : ${str1}`;
document.getElementById('str1-output').innerHTML = `Output : ${str1[2]}`;
let str2 = "oxoxoxox";
document.getElementById('str-2').innerHTML = `Input : ${str2}`;
document.getElementById('str2-output').innerHTML = `Output : ${str2.replaceAll('x', 'X')}`;
let str3 = "A New Java Book";
document.getElementById('str-3').innerHTML = `Input : ${str3}`;
document.getElementById('str3-output1').innerHTML = `Output = 1 : ${str3.toLowerCase()}`;
document.getElementById('str3-output2').innerHTML = `Output = 2 : ${str3.toUpperCase()}`;

// Question-10  write a JavaScript program for array reverse.
let revArr = [10, 20, 30, 40, 50];
document.getElementById('reverse-arr').innerHTML = `Array = [ ${revArr} ]`;
let revStr = '';
for (let i = revArr.length - 1; i >= 0; i--) {
    revStr += revArr[i] + ",";
}

document.getElementById('reverse-output').innerHTML = `Reverse String is => [ ${revStr} ]`;

// Question-11  write a JavaScript program for check value is found or not?
let foundArr = [90,100,95,42,92];
document.getElementById('found-arr').innerHTML = `Array = [ ${foundArr} ]`;
let foundNum = 100;
document.getElementById('found-num').innerHTML = `Number to be found => ${foundNum}`;
if (foundArr.includes(foundNum) == true) {
    document.getElementById('found-output').innerHTML = `Element is available in Array`;
}
else {
    document.getElementById('found-output').innerHTML = `Element is not available in Array`;
}

// Question-12  write a JavaScript program for print your name and write the no of total character.
let nameArr = "Bachelor Of Technology";
document.getElementById('name').innerHTML = `Name is => ${nameArr}`;
document.getElementById('name-count').innerHTML = `Total character in ${nameArr} is => ${nameArr.length}`;

// Question-13  write a JavaScript program given this output using replace concept.
let replaceContent = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
document.getElementById('replace-content').innerHTML = `Input => ${replaceContent}`;
document.getElementById('replace-output').innerHTML = `Output => ${replaceContent.replaceAll('dog', 'cat')}`;

// Question-14 write a JavaScript program convert string to array.
let strInput = "Hire the top 1% freelance developers";
document.getElementById('string-a').innerHTML = `Input => " ${strInput} "`;
document.getElementById('str-arr').innerHTML = `Output => [ ${strInput.split(" ")} ]`;

// Question-15  write a JavaScript program convert for array to string.
let arrInput = ['5', 32, 'Daniel'];
document.getElementById('arr-s').innerHTML = `Input => [ ${arrInput} ]`;
document.getElementById('arr-str').innerHTML = `Input => ${arrInput.toString()}`;
