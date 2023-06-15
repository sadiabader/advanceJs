
function validation(){
    let str = "A-Z||a-z||0-9"
    let fname = /a-z||A-Z/
    let lname = /a-z||A-Z/
    let email = /a-z||A-Z0-9/
    let contact = /0-9/

let result1 = str.match(fname)
let result2 = str.match(lname)
let result3 = str.match(email)
let result4 = str.match(contact)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
}


validation()