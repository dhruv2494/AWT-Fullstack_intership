document.write("DiffrentTypes of Data types:<br>");
var name="nothing";
var num=16;
var float=55.34;
var bool=true;
var arr=[1,3,5,7];
var arr2=["a","j","y"];

{
    document.write("<br>",name);
    document.write("<br>",num);
    document.write("<br>",float);
    document.write("<br>",bool);
    document.write("<br>",arr);
    document.write("<br>",arr2,"<br>");
}

document.write("<br>Printing types:<br>");
{
    document.write("<br>",typeof(name));
    document.write("<br>",typeof(num));
    document.write("<br>",typeof(float));
    document.write("<br>",typeof(bool));
    document.write("<br>",typeof(arr));
    document.write("<br>",typeof(arr2));
}

document.write("<br>Object");
var obj = new Object();
var obj ={
    brand:"ford",model:"raptor 450",color:"pearl blue"
}
document.write("<br>"+obj.brand+" "+obj.model+" "+obj.color,"<br>");

var demo=function(){
    return "Hello Welcome to JS";
}
document.write("<br>",demo());