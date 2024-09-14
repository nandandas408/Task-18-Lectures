//Question 1

  // const numbers = [1, 2, 3, 4, 5];
  // const squaredNumbers = numbers.map((num) => num * num);
  // console.log(squaredNumbers);  


//Question 2

  // function getGrade(score) {
    //return score >= 100 ? 'A' :
     //      score >= 90 ? 'B' :
     //      score >= 80 ? 'C' :
       //    score >= 70 ? 'D' :
         //  'F';
  
  // Example usage
  //console.log(getGrade(95)); 
  //console.log(getGrade(83));  
  //console.log(getGrade(78));  
  //console.log(getGrade(65));  
  //console.log(getGrade(105)); 
  

// Question 3

    // const car = {
    // companyName: 'Toyota',
    // model: 'Innova Crysta',
    // year: 2019,};
  
  // function changeYear(carObject, newYear) {
  //  carObject.year = newYear;}
  
  //changeYear(car, 2024);
  
   //const { model, year } = car;
   //console.log(`Model: ${model}`);  
  // console.log(`Year: ${year}`);  
  

//Question 4

   //function isPrime(number) {
    //if (number <= 1) return false;  
    //for (let i = 2; i <= Math.sqrt(number); i++) {
      // if (number % i === 0) {
        //return false;  
      // }
     // }
    //return true;}

    //const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
    //const primeNumbers = numbers.filter((num) => isPrime(num));
    // console.log(primeNumbers); 
  

//Question 5
  
 //MAP FUNCTION:-

  //Transforming Data:- Use map to transform elements in an array by applying a function to each element and creating a new array with the transformed values. For example, mapping an array of strings to uppercase or extracting specific properties from an array of objects.
  // Generating JSX/HTML:- In React or web development, map is commonly used to generate JSX elements or HTML based on data stored in an array. This is useful for rendering dynamic content.
  //Calculations:- You can use map to perform calculations on each element of an array and generate a new array with the results. For instance, mapping an array of numbers to their squares or cubes.

 //FILTER FUNCTION:-

  // Filtering Data:- Use filter to create a new array containing elements that meet a specified condition. For example, filtering an array of numbers to get only even numbers or filtering an array of objects based on a property's value.
  //Removing Invalid Data:- In data processing tasks, filter can be used to remove invalid or unwanted data from an array, leaving only the relevant data.
  //Conditional Rendering:- In UI development, filter can be used to conditionally render elements based on certain criteria, such as showing only completed tasks in a to-do list.

 //REDUCE FUNCTION:-

   //Aggregating Data:- Use reduce to iterate through an array and accumulate a single value based on the elements. This can be used for summing up numbers, concatenating strings, or finding the maximum/minimum value in an array.
   //Data Transformation:- reduce can be used for more complex data transformations where the result depends on multiple elements of the array. For instance, transforming an array of objects into a single object or array based on certain criteria.
   //Error Handling:- In error handling scenarios, reduce can be used to handle and combine errors from multiple sources into a single result, such as aggregating error messages.


//Question 6
 
  //const fetch = require('node-fetch');
 
 //async function fetchData() {
  //try { 
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
     
    //if (!response.ok) {
      //throw new Error('Failed to fetch data');}
    
   // const data = await response.json();
    
   // console.log(data);
  // } 
    //catch (error) {
   // console.error('Error fetching data:', error.message);}
 // }
  //fetchData();


//Question 7

//const person = {
  //name: 'Nandan Das',
  //address: {
  //  street: '123 civil lines',
  //city: 'Gorakhpur',
   //country: 'India'
  // }
  //};
// const phoneNumber = person.contact?.phone;

  // console.log(phoneNumber);  


  
