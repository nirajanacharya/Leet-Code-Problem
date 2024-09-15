function findTheLongestSubstring(s) {
    let n = s.length;
    let vowelMask = { 'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16 };
    let mask = 0; 
    let map = { 0: -1 };  
    let maxLength = 0;
    
    for (let i = 0; i < n; i++) {
        let char = s[i];
        
        
        if (vowelMask.hasOwnProperty(char)) {
            mask ^= vowelMask[char];
        }
        
        
        if (map.hasOwnProperty(mask)) {
            maxLength = Math.max(maxLength, i - map[mask]);
        } else {
            
            map[mask] = i;
        }
    }
    
    return maxLength;
}


console.log(findTheLongestSubstring("eleetminicoworoep"));  
console.log(findTheLongestSubstring("leetcodeisgreat"));   
console.log(findTheLongestSubstring("bcbcbc"));            
