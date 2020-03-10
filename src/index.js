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
  // console.log(plusOrMinusArr);
  // console.log(str.substring(0, plusOrMinusArr[0]));
  let polyArr = [];
  for (let i = 0; i < plusOrMinusArr.length - 1; i++) {
    polyArr.push(str.substring(plusOrMinusArr[i], plusOrMinusArr[i + 1]));
  }
  console.log(polyArr);

  //i believe i can loop through all of these and if the strings contain the same letters i can add them together
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
