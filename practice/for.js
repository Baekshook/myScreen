for (let i = 0; i < 10; i++) {
  let star = "";
  for (let j = 0; j < 10; j++) {
    if (j < i) {
      star += "*";
    }
  }
  console.log(star);
}

var n = 10; //  크기
var triangle = ""; //  문자열

// 윗부분
for (var i = 1; i <= n; i++) {
  var space = " ".repeat(n - i);
  var star = "*".repeat(2 * i - 1);
  triangle += space + star + "\n";
}
console.log(triangle);
