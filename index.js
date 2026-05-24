//STAGE 1 TASKS (Please scroll down to find stage 2 tasks)
    // QUESTION 1
    const username = "Victor Peter Ukok";

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    console.log(reverseString(username));

    // QUESTION 2
    // Data Types in JavaScript
    // 1. String: a sequence of characters used to represent text that can be wrapped in single quotes, double quotes, or backticks.
    //     Methods: toUpperCase(), toLowerCase(), charAt().
    // 2. Number: represents both integer and floating-point numbers.
    //     Methods: toFixed(), parseInt(), parseFloat().

    //QUESTION 3
    let score = 101;

    if (score >= 70 && score <= 100) {
        console.log("Excellent!");
    } else if (score >= 60 && score <= 69) {
        console.log("Very Good!");
    } else if (score >= 50 && score <= 59) {
        console.log("Good!");
    } else if (score >= 40 && score <= 49) {
        console.log("Poor!");
    } else if (score >= 0 && score <= 39) {
        console.log("Very Poor!");
    } else {
        console.log("Invalid score!");
    }

//STAGE 2 TASKS
    // 1. Write a function that accepts a 2 dimentional array and returns a flatten array as its value. Do not use the .flat() function when carrying out this task.
    function flattenArray(arr) {
        let flattened = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                flattened.push(arr[i][j]);
            }
        }
        return flattened;
    }

    const inputArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
    const outputArray = flattenArray(inputArray);
    console.log(outputArray);   

    // 2. Write a function that accepts 3 arrays and returns an array of elements that are found/shared between the three arrays.

    function findCommonElements(arr1, arr2, arr3) {
        let commonElements = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
                commonElements.push(arr1[i]);
            }
        }
        return commonElements;
    }

    //OR

    function findCommonElements2(arr1, arr2, arr3) {
        return arr1.filter(element => arr2.includes(element) && arr3.includes(element));
    }

    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5];
    const array3 = [3, 4, 5, 6];
    const commonElements = findCommonElements(array1, array2, array3);
    console.log(commonElements);
    const commonElements2 = findCommonElements2(array1, array2, array3);
    console.log(commonElements2);

    // 3. Write a function that accepts an array of elements and returns a list of unique elements. Do not use the Set or filter function when carrying out this task.

    function returnUnique(arr) {
        let unique = [];
        for (let i = 0; i < arr.length; i++) {
            if (!unique.includes(arr[i])) {
                unique.push(arr[i])
            }
        }
        return unique;
    }

    const inputArray2 = [1, 3, 2, 3, 4, 5, 4, 2, 5, 6];
    const uniqueArray = returnUnique(inputArray2);
    console.log(uniqueArray);

    // 4. Write a JavaScript that accepts a string in kabeb case and returns the string in camel case.
    

    function kebabToCamel(str) {
        let words = str.split("-");
        for (let i = 1; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join("");
    }

    const kebabString = "hello-there";
    const camelString = kebabToCamel(kebabString);
    console.log(camelString);