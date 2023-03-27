const QUOTES = "quotes";

function getYear() {
  const year = document.querySelector(".year");
  const newDate = new Date();

  const dates = String(newDate.getDate()).padStart(2, "0");
  const months = String(newDate.getMonth() + 1).padStart(2, "0");
  const years = String(newDate.getFullYear());

  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  year.innerText = `${years}년 ${months}월 ${dates}일`;
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
//padStart 함수 -> padStart(6, "0x")뜻은 6글자가 아니면 "0x"를 붙혀라, 사용법 a 변수 선언 후 a.padStart(6, "0x")
getYear();
getTime();
setInterval(getTime, 1000);

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let saveQuotes = localStorage.getItem(QUOTES);

  if (!saveQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "열심히 살아봅시다!🔥",
        "그래도 열심히 살아야지..!",
        "열심히 살면 반드시 빛이 온다.",
        "열심히 살면 뭐해~",
      ])
    );

    saveQuotes = localStorage.getItem(QUOTES);
  }
  let quotesArray = JSON.parse(saveQuotes);
  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)]; // 랜덤 함수 호출 및 배열 길이로 랜덤 값 추출
}

getQuotes();

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");

  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    alert("값을 입력해 주세요!");
    return;
  }
  let saveQuotes = localStorage.getItem(QUOTES);
  let quotesArray = JSON.parse(saveQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerHTML = `<span style="color:red;">${newQuotesInput.value}</span>`;
  newQuotes.style.display = "none";
  newQuotesInput.value = "";
}

let isLoading = false;

async function onClickSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchResult = document.querySelector(".searchResult");
  if (!searchInput.value) return alert("값을 입력해주세요!");
  if (isLoading) return alert("로딩중입니다.");

  isLoading = true;
  const question = searchInput.value;
  searchInput.value = "검색 중 입니다... 잠시만 기다려주세요!";

  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      question,
      // question: question, -> key, value가 같으면 그냥 question, 으로만 적어도 됨
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      },
    }
  );
  if (response.status === 200) {
    searchResult.style.display = "inline";
    searchResult.innerText = response.data.choices[0].message.content;
  }

  searchInput.value = "";
  isLoading = false;
}

function onClickToggle(value) {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  } else {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  }
}
