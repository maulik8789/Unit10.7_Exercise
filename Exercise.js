/////1st
new Set([1,1,2,2,3,4]) // {1,2,3,4}


/////2nd
let a = [...new Set("referee")].join("") // ref


/////3rd
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //0: {Array(3): true}  
                        //1: {Array(3): false }


/////4th

let hasDuplicate = val => {
    return new Set(val).size != val.length;
} 
console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false


/////5th

let vowelCount = word => {
    let a = 0, e = 0, i=0, o=0, u=0;
    word.toLowerCase();
    let wordMap = new Map();
    word.split("").forEach(element => {
        if(element == 'a' || element =='e' || element =='i' || element =='o' || element =='u'){
            console.log(element)
            if(element == 'a')wordMap.set(element, a+1) 
            else if(element =='e')wordMap.set(element, e++)
            else if (element =='i')wordMap.set(element, i++)
            else if(element =='o')wordMap.set(element, o++)
            else if(element =='u')wordMap.set(element, u++)
            
            
            for(let [key] of wordMap) {
                //console.log(element);
                //if (key == element) {wordMap.set(element, +1)}        
            }
        }
    });
    
    // 
    // 
    return wordMap;
}
console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }
////FOR REFERENCE
// function isVowel(char){
//     return "aeiou".includes(char);
//   }
  
//   function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//       let lowerCaseChar = char.toLowerCase()
//       if(isVowel(lowerCaseChar)){
//         if(vowelMap.has(lowerCaseChar)){
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//         } else {
//           vowelMap.set(lowerCaseChar, 1);
//         }
//       }
//     }
//     return vowelMap;
//   }