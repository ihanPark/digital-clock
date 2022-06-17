const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();
  let year = now.getFullYear(); //년
  let month = now.getMonth() + 1; //월 1-12
  let day = now.getDate(); //일 1-31
  let hour = now.getHours(); //시 0-23
  let minute = now.getMinutes(); //분 0-59
  let second = now.getSeconds(); //초 0-59
  let noon = "오전";
  let dayNumber = now.getDay(); //요일 0-6
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];


  if (hour > 12) {
    hour = hour - 12;
    noon = "오후";
  }
  
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  todayDiv.textContent = year + "년 " + month + "월 " + day + "일 " + dayList[dayNumber] + "요일";
  timeDiv.textContent = noon + " " + hour + ":" + minute + ":" + second;


}
getTime();
setInterval(getTime, 1000);


document.getElementById("expl").addEventListener("click", explain);

function explain() {
  alert("설명: 년/월/일, (오전/오후) 시간 순으로 보여집니다");
}


