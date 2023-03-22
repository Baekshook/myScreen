const block = "블";
const bble = "쁠";
const chain = "체";
const school = "스";

let rightWord = block + chain + school;

if (rightWord === "블체스") {
  console.log("블체스 화이팅!");
} else if (rightWord === "블록체인") {
  console.log("블체스 1기");
} else {
  console.log("블체스 3기");
}

console.log(1 == 1);
console.log(1 === 1);
console.log(1 == "1"); // true type이 달라도 값만 같으면 true
console.log(1 === "1"); // false type, 값 둘다 같아야 true