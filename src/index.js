function simplify(poly){
  //your code here
  //does not work
//   console.log(poly.split("+"||"-");
let str = poly;
let string2 = str.replace(/\W/g, " ");
// console.log(string2);
let arr = string2.split(" ");
console.log(arr);
let plusArr = [];
let minusArr = [];
for(let i =0; i<str.length; i++){
if(str.charAt(i)==="+"){
plusArr.push(i)
}
if(str.charAt(i)==="-"){
  minusArr.push(i)
}
}
console.log(plusArr)
console.log(minusArr)
}

simplify("dc+dcba"); //, "cd+abcd")
simplify("2xy-yx") //,"xy")
simplify("-a+5ab+3a-c-2a") //,"-c+5ab")
simplify("-abc+3a+2ac") //,"3a+2ac-abc")
simplify("xyz-xz") //,"-xz+xyz")
simplify("a+ca-ab") //,"a-ab+ac")
simplify("xzy+zby") //,"byz+xyz")
simplify("-y+x") //,"x-y")
simplify("y-x") //,"-x+y")
