// HW №9 
const array = [1, 2, 3, 4, 5, 6, 7] 
function removeElement(array, item) { 
        let arrLet = array.indexOf(item) 
        array.splice(arrLet, 1) 
} 
removeElement(array,5) 
console.log(array)
