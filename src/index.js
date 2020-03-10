function simplify(poly) {
  //your code here
  //does not work
  //   console.log(poly.split("+"||"-");
  let str = poly;

  let plusOrMinusArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "+" || str.charAt(i) === "-") {
      plusOrMinusArr.push(i);
    }
  }
  if (plusOrMinusArr[0] !== 0) {
    plusOrMinusArr.unshift(0);
  }

  plusOrMinusArr.push(str.length);
  console.log(str);
  console.log(plusOrMinusArr);
}

simplify("dc+dcba"); //, "cd+abcd")
simplify("2xy-yx"); //,"xy")
simplify("-a+5ab+3a-c-2a"); //,"-c+5ab")
simplify("-abc+3a+2ac"); //,"3a+2ac-abc")
simplify("xyz-xz"); //,"-xz+xyz")
simplify("a+ca-ab"); //,"a-ab+ac")
simplify("xzy+zby"); //,"byz+xyz")
simplify("-y+x"); //,"x-y")
simplify("y-x"); //,"-x+y")
