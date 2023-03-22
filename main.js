function getYear() {
  const year = document.querySelector(".year");
  const newDate = new Date();

  const dates = String(newDate.getDate()).padStart(2, "0");
  const months = String(newDate.getMonth() + 1).padStart(2, "0");
  const years = String(newDate.getFullYear());

  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  year.innerHTML = `${years}년 ${months}월 ${dates}일`;
}

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
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getYear();
getTime();
setInterval(getTime, 1000);

//padStart 함수 -> padStart(6, "0x")뜻은 6글자가 아니면 "0x"를 붙혀라, 사용법 a 변수 선언 후 a.padStart(6, "0x")
