let a;
a=5;
a=String(5)
document.write(a," ",typeof a)
let b=new String(Date())
console.log(b,typeof b);
let array=String((987654))
console.log(array.length,typeof array);

document.write("<br/><br/>")

document.write("<br/>",Number("253.5"))
document.write("<br/>",Number(" "))
document.write("<br/>",Number(""))
document.write("<br/>",Number("5dHRUV5"))

document.write("<br/><br/>")

let ne=55.3;
document.write("<br>",ne.toExponential())
document.write("<br>",ne.toExponential(2))
document.write("<br>",ne.toExponential(3))

document.write("<br/><br/>")

let namfix=3083.65
document.write("<br>",namfix.toFixed())
document.write("<br>",namfix.toFixed(2))
document.write("<br>",namfix.toFixed(1))

let nc=2532.35
document.write("<br>",nc.toPrecision())
document.write("<br",nc.toPrecision(1))
document.write("<br>",nc.toPrecision(3))

document.write("<br/><br/>")

document.write("<br/>",Number.MAX_VALUE)
document.write("<br/>",Number.MIN_VALUE)
document.write("<br/>",Number.NEGATIVE_INFINITY)
document.write("<br/>",Number.POSITIVE_INFINITY)

document.write("<br/><br/>")

document.write("<br/>",parseInt("-555"))
document.write("<br/>",parseInt("+99"))
document.write("<br/>",parseInt("888 55 5"))
document.write("<br/>",parseInt("Dhruv"))

document.write("<br/><br/>")

document.write("<br/>",parseFloat("-555.3666"))
document.write("<br/>",parseFloat("+99.55"))
document.write("<br/>",parseFloat("888.5 55 5"))
document.write("<br/>",parseFloat("Dhruv"))

document.write("<br/><br/>")

document.write("<br/>",new Date())
document.write("<br/>",new Date("2019-6-25"))
document.write("<br/>",new Date(5,6,9))
document.write("<br/>",new Date("July 2,2004 07:30:00"))

let h=new Date()

document.write("<br/><br/>")

document.write("<br/>",h.toString())
document.write("<br/>",h.toISOString())
document.write("<br/>",h.getTime())
document.write("<br/>",h.getMilliseconds())
document.write("<br/>",h.getSeconds())
document.write("<br/>",h.getSeconds())
document.write("<br/>",h.getMinutes())
document.write("<br/>",h.getHours())
document.write("<br/>",h.getDate())
document.write("<br/>",h.getDay())
document.write("<br/>",h.getMonth())
document.write("<br/>",h.getFullYear())
document.write("<br/>",h.getTime())