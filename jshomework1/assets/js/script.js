
 //Request a user’s name and display the response “Hello, [name]”.
    const userName = prompt('Please enter your name:');
    console.log('Hello,' + ' ' + userName);
     //Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time. 
    const distance=prompt("tell me km between 2 cities");
    const time=prompt("tell me time you want to cover it in hours");
    console.log(distance/time);

    //Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 
    var year= prompt("Tell me your year of birth")
    currentYear=2022
    console.log(currentYear-year)



     //Request a radius of a circle and display the area of such a circle. 
    var circle=prompt("Tell me the radius of the circle")
    console.log(3.14*circle**2)

    

    //A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 
    const flashmemory=prompt("what is the flash memory in gb");
    const flashdrive=prompt("tell me time you want to cover it in hours");
    console.log(flashmemory*flashdrive);

    //Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant
    const USD=prompt("How much money in usd do you have sir?");
    console.log(USD*0.88);

    //A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 
    const money=prompt("how much money in usd do u have");
    const chocolatePrice =prompt("what is price of chocolate bar");
    console.log(money/chocolatePrice);
    console.log(money%chocolatePrice);

    //The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest
    const bankDeposits = prompt('What is your bank deposits for 2 months?'); 
    const interestRate = 0.05;
     console.log(bankDeposits/interestRate);

         //Request a length of a side of a square from a user and display the perimeter of the square. 
     var side =prompt("Tell me the length of a side of the square")
     var perimeter = +sideLength * 4;
    console.log('The perimeter of the sqaure is:' + ' ' + perimeter)

 
    
    
   
   
