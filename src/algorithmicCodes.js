/*
    1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

        Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
*/

//Çözüm:

console.log("1. SORU OUTPUT: ")

let findPrime = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 1) 
            console.log("En küçük asal sayı 2 olduğu için " + numbers[i] + " asal sayı değildir!");

        else {
            let number = numbers[i]
            let controlNumber = 0
            
            for (let j = 1; j <= number; j++) {
                if ((number % j) == 0 )
                    controlNumber++;               
            }

            if(controlNumber == 2)
                console.log(number + " sayısı asaldır!")
            
            else
                console.log(number + " sayısı asal değildir!")
        }  
    }
}

findPrime(1,2,4,5,7)
console.log("----")
findPrime(-35, -2, 0, 125, 11, 27, 2, 37, 83)


//---------------------------------------- 2 --------------------------------------------------------

console.log("2. SORU OUTPUT: ")

/*
    2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
*/ 

//2. ve 3. soruda kullanılacak olan, bir sayının bölenlerini bulan fonksiyon:
let findDivisors = (number) => {
    let divisors = [];
    let j = 0, divisorsSum = 0;
    for (let i = 1; i <= number; i++) {
        if( number % i == 0)
        {
            divisors[j] = i;
            divisorsSum += divisors[j];
            j++;
        }  
    }
    return divisorsSum;
}

//Çözüm:
let findFriendNumbers = (number1, number2) => {
    if ((findDivisors(number1) - number1) ==  number2){
        if ((findDivisors(number2) - number2) == number1)
            return console.log(number1 + " ve " + number2 + " arkadaş sayılardır." );
    }
    else
        return console.log("Girmiş olduğunuz iki sayı, maalesef arkadaş sayı değillerdir!");
}

findFriendNumbers(220, 284);
findFriendNumbers(1184, 1210);
findFriendNumbers(52, 98);

//---------------------------------------- 3 --------------------------------------------------------

console.log("3. SORU OUTPUT: ")

/*
    3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
*/ 

//Çözüm:

let findPerfectNumbers = () => {
    let perfectNumbers = [];

    for (let i = 6; i < 1000; i++) { //en küçük mükemmel sayı 6' dır.
       if( findDivisors(i) == i * 2 )
            perfectNumbers.push(i);
   }

   return perfectNumbers;
}

console.log(findPerfectNumbers());

//---------------------------------------- 4 --------------------------------------------------------

console.log("4. SORU OUTPUT: ")

/*
    4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/ 

//Çözüm:
let primeNumbersUpToAThousand = () => {
    for (let i = 2; i < 1000; i++) {
        let controlNumber = 0
            
        for (let j = 1; j <= i; j++) {
            if ((i % j) == 0 )
                controlNumber++;               
        }

        if(controlNumber == 2)
            console.log(i)       
    }
}

primeNumbersUpToAThousand()