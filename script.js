let generateBtnEl = document.getElementById("generate-btn")
let passwordDisplayEl = document.getElementById("password-display")
let numRendererBoxEl = document.getElementById("num-renderer")
let numCheckBoxEl = document.getElementById("has-numbers")
let symbolsCheckBoxEl = document.getElementById("has-symbols")

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = ""
let charWithoutSymbols = []
let charWithoutNumbers = []
let symbolsOnly = []
let numChecked = false
let symbolChecked = false
for(let i = 0; i < characters.indexOf("9") + 1; i++){
   charWithoutSymbols.push(characters[i])
}
for(let i = 0; i < characters.indexOf("z") + 1; i++){
    charWithoutNumbers.push(characters[i])
}
for(let i = 62; i < characters.length; i++){
    symbolsOnly.push(characters[i])
}
let charWithNumbers = [charWithoutSymbols]
let charWithSymbols = [...symbolsOnly, ...charWithoutNumbers]

generateBtnEl.addEventListener('click', generatePassword)
function generatePassword(){
    let renderBoxValue = parseInt(numRendererBoxEl.value)
    password = ""
    numChecked = numCheckBoxEl.checked ? true: false
    symbolChecked = symbolsCheckBoxEl.checked ? true:false
    if(numChecked && symbolChecked == false){
        for(let i =0; i < renderBoxValue; i++){
            let generatedPassword = charWithoutSymbols[Math.floor(Math.random()*charWithoutSymbols.length)]
            password += generatedPassword
        }
    }else if(symbolChecked && numChecked == false){
        for(let i = 0; i < renderBoxValue; i++){
            let generatedPassword = charWithSymbols[Math.floor(Math.random()*charWithSymbols.length)]
            password +=  generatedPassword
        }
    }else 
        for(let i =0; i<renderBoxValue; i++){
            let generatedPassword = characters[Math.floor(Math.random()*characters.length)]
            password +=  generatedPassword
        }
    passwordDisplayEl.innerText = password
}
passwordDisplayEl.addEventListener('click', copyToClipboard)
function copyToClipboard(){
    if(!passwordDisplayEl.value == ""){
        navigator.clipboard.writeText(passwordDisplayEl.value);
        alert(`password: ${passwordDisplayEl.value} copied to clipboard `)
    }
}