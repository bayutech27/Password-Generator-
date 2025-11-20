//Creating an Array of data

const character = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '@', '#', '$', '_', '&', '?', '!', '£', '€', '%'];


// Referencing the ID

const display = document.getElementById('display');

const selectButton = document.getElementById('select-btn');

const generateButton = document.getElementById('generate-btn');


//Logic


generateButton.addEventListener('click', function(){
    
    
    let passwordLength = Number(selectButton.value);
    
    let password = '';
        
for (let i = 0; i < passwordLength; i++) {
            
    randomIndex = Math.floor(Math.random() * character.length);
    
    password += character[randomIndex];
    
    display.value = password;
     };
     });