function name1() {
    let d = /[0-9]/g
    document.getElementById("name").value = document.getElementById("name").value.replace(d, "")
    // a=a.match(/^[a-zA-Z]/g
}
function name12() {
    let d = /[0-9]/g
    document.getElementById("name").value = document.getElementById("name").value.replace(d, "")
    let e = /(\s)/g
    let c = document.getElementById("name").value
    console.log(e.test(c));
    let j = e.test(c);
    if (e.test(c) == false) {
        document.getElementById("nspace").hidden = false;
        document.getElementById("nspace").style.color = "red";
    }
    else {
        document.getElementById("nspace").hidden = true;
    }
}
function email1() {
    let e = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let c = document.getElementById("email").value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (c == null) {
        document.getElementById("email").value = "";
        document.getElementById("emailtrue").hidden = false;
        document.getElementById("emailtrue").style.color = "red";
    }
    else {
        document.getElementById("emailtrue").hidden = true;
    }
}
function num1() {
    let d = /[a-zA-Z]/g
    document.getElementById("num").value = document.getElementById("num").value.replace(d, "")
}
function k() {
    let c = document.getElementById("cun").value
    console.log(c);
    if (c == "null") {
        console.log(c);
        document.getElementById("cunt").hidden = false;
        document.getElementById("cunt").style.color = "red";
    }
    else {
        document.getElementById("cunt").hidden = true;
    }
}
function l() {
    alert(`Full name:- ${document.getElementById("name").value}\nEmail Address:- ${document.getElementById("email").value}\nMobile Number:- ${document.getElementById("num").value}\nCountry:- ${document.getElementById("cun").value}\nGender:- ${document.getElementsByName("gender").value}\nHobbies:- ${document.getElementsByName("checkbox").value}`)

}