function hello(a, b) {
    return a * b
}
document.write(hello(5, 6),"<br/>")
let a = ["dhruv", "bhuva", "h"]
const a2 = a.map(function (a) {
    return a.length
})
document.write("normal function", a2)
const a3 = a.map((a) => a.length)
document.write("<br/n>arrow function ", a3)
console.log(square(5))
document.write("<br/>",square(5))
function square(a){
    return a*a
}