let arr = [];
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) { return true; }
        else {
            for (let i = 0; i < l.length; i++) {
            
                if(arr[i] === undefined){
                    arr[i] = l[i];
                }
                else {
                    arr[i] = arr[i] + l[i]; 
                }
               
            }

        }
        console.log(arr);
        for (let item of arr) {
            if(item.includes(word)) {
                return true;
            }
        }
    }
    return false;
};


//const result = wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D']], "AS");

// console.log(result);
        //wordSearch(result, "wcf");


       module.exports = wordSearch