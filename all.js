// feature1：乘法表
for (var i = 3; i <= 15; i++) {
  for (var j = 1; j <= 15; j++) { 
    multi = `${i} x ${j} = ${i*j}`;
    console.log(multi);
  }
}

// feature2：BMI
function BMI(height, weight) {
  let BMI = ( weight / Math.pow((height)/100, 2) ).toFixed(1);
  return BMI;
}
console.log(BMI(178, 70));
