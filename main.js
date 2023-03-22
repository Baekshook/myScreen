function getTime() {
  const time = document.querySelector(".time");
  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  // 10 => "10"
  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }

  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);

//padStart 함수 -> padStart(6, "0x")뜻은 6글자가 아니면 "0x"를 붙혀라, 사용법 a 변수 선언 후 a.padStart(6, "0x")
