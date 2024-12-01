// esercizio 1 crea una funzione che controlli 2 numeri interi. ritorna "true" se uno dei due numeri è 50 o se la somma dei due numeri da come risultato 50.

function checkNumbers(num1, num2) {
    
    return num1 === 50 || num2 === 50 || (num1 + num2 === 50);
  }
  
  console.log(checkNumbers(50, 10)); 
  console.log(checkNumbers(20, 30)); 
  console.log(checkNumbers(25, 25)); 
  console.log(checkNumbers(10, 20)); 
  
  // esercizio 2 crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. passa la stringa e la posizione come parametri e ritorna la stringa modificata 

  function removeCharAt(str, position) {
    if (position < 0 || position >= str.length) {
      
      return str; 
    }
    
    return str.slice(0, position) + str.slice(position + 1);
  }
  console.log(removeCharAt("ciao", 1)); 
  console.log(removeCharAt("oceano", 4));
  console.log(removeCharAt("prova", 10));

  //esercizio 3 crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. ritorna "true" se rispecchiano queste condizioni o altrimenti ritorna "false"

  function checkRange(num1, num2) {
  
  const inRange1 = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
  const inRange2 = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);

  return inRange1 || inRange2;
  }
  console.log(checkRange(45, 55)); 
  console.log(checkRange(75, 90)); 
  console.log(checkRange(50, 80)); 
  console.log(checkRange(30, 60)); 


//esercizio 4 crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "los" o "new" altrimenti ritorni "false"

function checkCityName(cityName) {
    
    const lowerCaseCity = cityName.toLowerCase();
  
    
    if (lowerCaseCity.startsWith("los") || lowerCaseCity.startsWith("new")) {
      return cityName; 
    }
  
    return false; 
  }
  
  
  console.log(checkCityName("Los Angeles")); 
  console.log(checkCityName("New York"));    
  console.log(checkCityName("Chicago"));     
  console.log(checkCityName("newark"));      
  console.log(checkCityName("Los Gatos"));   

  //esercizio 5 crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. l'array deve essere passato come parametro 

  function calculateSum(array) {
    
    return array.reduce((sum, current) => sum + current, 0);
  }
  
  
  console.log(calculateSum([1, 2, 3, 4, 5])); 
  console.log(calculateSum([10, 20, 30]));    
  console.log(calculateSum([]));              
  console.log(calculateSum([-5, 10, -15]));   
  
  //esercizio 6 crea una funzione che controlli che un array non contenga i numeri 1 o 3. se non li contiene ritorna "true" se li contiene ritorna "false"

  function checkArray(array) {
    
    if (array.includes(1) || array.includes(3)) {
      return false; 
    }
    return true; 
  }
  
  console.log(checkArray([2, 4, 5])); 
  console.log(checkArray([1, 2, 4])); 
  console.log(checkArray([3, 5, 7])); 
  console.log(checkArray([2, 6, 8])); 
  console.log(checkArray([]));        
  
  //esercizio 7 crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro. angolo acuto: meno di 90° ritorna "acuto" . angolo ottuso: tra i 90° e i 180° ritorna "ottuso". angolo retto: 90° ritorna "retto". angolo piatto:  180° ritorna "piatto".

  function getAngleType(degrees) {
    if (degrees < 90) {
      return "acuto"; 
    } else if (degrees === 90) {
      return "retto"; 
    } else if (degrees > 90 && degrees < 180) {
      return "ottuso"; 
    } else if (degrees === 180) {
      return "piatto"; 
    } else {
      return "invalido"; 
    }
  }
  console.log(getAngleType(45));  
  console.log(getAngleType(90));  
  console.log(getAngleType(120)); 
  console.log(getAngleType(180)); 
  console.log(getAngleType(200)); 
  
  //esercizio 8 crea una funzione che crei un acronimo a partire da una frase

  function createAcronym(phrase) {
  
  return phrase
    .split(" ") 
    .map(word => word[0].toUpperCase()) 
    .join(""); 
}
console.log(createAcronym("As soon as possible")); 
console.log(createAcronym("Hyper Text Markup Language")); 
console.log(createAcronym("Portable Network Graphics")); 
console.log(createAcronym("Hello World")); 

//EXTRA 1 Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function mostUsedChar(str) {
    const charCount = {}; 
  
    
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    let maxChar = null; 
    let maxCount = 0;  
  
    
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  console.log(mostUsedChar("the dark side")); 
  console.log(mostUsedChar("summit"));  
  console.log(mostUsedChar("aabbbcc"));     
  console.log(mostUsedChar(""));            
  
  // 2 Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.

  function areAnagrams(str1, str2) {
   
    const normalize = (str) =>
      str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
  
   
    return normalize(str1) === normalize(str2);
  }
  console.log(areAnagrams("Listen", "Silent"));           
  console.log(areAnagrams("Astronomer", "Moon starer"));  
  console.log(areAnagrams("Hello, World!", "dlroW ,olleH")); 
  console.log(areAnagrams("Not", "An Anagram"));          
  
  // 3 Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.

  function findAnagrams(word, possibleAnagrams) {
    
    const normalize = (str) =>
      str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
  
    
    const normalizedWord = normalize(word);
  
    
    return possibleAnagrams.filter((candidate) => normalize(candidate) === normalizedWord);
  }
  console.log(findAnagrams("listen", ["enlist", "google", "inlets", "banana"])); 
  console.log(findAnagrams("hello", ["ohell", "world", "loleh", "elloh"])); 
  console.log(findAnagrams("race", ["care", "acre", "scare", "racecar"])); 
  console.log(findAnagrams("test", ["sett", "estt", "tset", "not"])); 
  
  // 4 Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

  function isPalindrome(str) {
    
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    
    return cleanedStr === cleanedStr.split("").reverse().join("");
  }
  console.log(isPalindrome("racecar"));             
  console.log(isPalindrome("A man, a plan, a canal, Panama")); 
  console.log(isPalindrome("hello"));              
  console.log(isPalindrome("Was it a car or a cat I saw"));   
  console.log(isPalindrome("No 'x' in Nixon"));     
  
  // 5 Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario.

  function reverseNumber(num) {
    
    const reversed = parseInt(num.toString().split("").reverse().join(""), 10);
  
    
    return num < 0 ? -reversed : reversed;
  }
  console.log(reverseNumber(189));   
  console.log(reverseNumber(-123));  
  console.log(reverseNumber(0));     
  
  // 6  Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

  function printStaircase(steps) {
    if (steps <= 0) {
      console.log("Il numero deve essere positivo.");
      return;
    }
  
    for (let i = 1; i <= steps; i++) {
      const step = "#".repeat(i).padEnd(steps, " ");
      console.log(step);
    }
  }
  
  
  printStaircase(5);
 
  // 7 Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("Ciao")); 
  console.log(reverseString("Hello World")); 
  console.log(reverseString("12345")); 
  
  // 8 Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y. 

  function chunkArray(array, y) {
    const result = [];
    
    for (let i = 0; i < array.length; i += y) {
      result.push(array.slice(i, i + y)); 
    }
  
    return result;
  }
  console.log(chunkArray([1, 2, 3, 4], 2)); 
  console.log(chunkArray([1, 2, 3, 4, 5], 4)); 
  console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); 
  
  // 9 Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati. 

  function printPyramid(x) {
  if (x <= 0) {
    console.log("Il numero deve essere positivo.");
    return;
  }

  for (let i = 1; i <= x; i++) {
    const spaces = " ".repeat(x - i); 
    const hashes = "#".repeat(2 * i - 1); 
    console.log(`'${spaces}${hashes}${spaces}'`); 
  }
}


printPyramid(3);
printPyramid(5);

// 10 Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN

function generateSpiralMatrix(N) {
    
    const matrix = Array.from({ length: N }, () => Array(N).fill(0));
  
    let value = 1; 
    let top = 0, bottom = N - 1, left = 0, right = N - 1;
  
    while (top <= bottom && left <= right) {
     
      for (let i = left; i <= right; i++) {
        matrix[top][i] = value++;
      }
      top++;
  
     
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = value++;
      }
      right--;
  
      
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = value++;
        }
        bottom--;
      }
  
      
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = value++;
        }
        left++;
      }
    }
  
    return matrix;
  }
  console.log(generateSpiralMatrix(2));
  console.log(generateSpiralMatrix(3));
  console.log(generateSpiralMatrix(4));
  
  