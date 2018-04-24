function randomNum() {
  return Math.floor(256 * Math.random());
}
function randomColorCode() {
  return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}

const colorCodeEl = document.querySelector('.color-code');
// colorCodeEl.textContent = randomColorCode();

const boxes = document.querySelectorAll('.box');
// const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()]; // 각 판 마다 새로 생성 @@

let correctAnswer;
let score = 0;
document.querySelector('.score').textContent = score;

// boxes.forEach((el, index) => {
//   el.style.backgroundColor = colorCodes[index];
// }); // @@
// boxes[0].style.backgroundColor = randomColorCode();
// boxes[1].style.backgroundColor = randomColorCode();
// boxes[2].style.backgroundColor = randomColorCode();

// 맞으면(컬러코드를 클릭했을 때) 1. 컬러코드 중 하나를 randomColorCode에 표시 2. Score +1
document.querySelectorAll('.box').forEach(el => el.style.backgroundColor = randomColorCode()); // nodelist forEach
// const correctAnswer = Math.floor(3 * Math.random()); // 정답을 correctAnswer에 저장 // @@
// colorCodeEl.textContent = colorCodes[correctAnswer]; // @@

// 컬러코드를 클릭했을 때 반응 - 이벤트 리스너 - forEach로 
boxes.forEach((el, index) => {
  el.addEventListener('click', () => {
    if (correctAnswer === index) {
      score++;
      alert('맞았습니다!');
      document.querySelector('.modal.right').classList.add('show'); // 클래스 동적으로 추가하기 준비
    } else {
      score = 0;
      alert('틀렸습니다!');
      document.querySelector('.modal.bad').classList.add('show');
    }
    document.querySelector('.score').textContent = score; // 화면에 반영
  })  
});
// 컬러코드를 클릭했을 때 반응 - 이벤트 리스너
// boxes[0].addEventListener('click', () => {
//   if (correctAnswer === 0) {
//     alert('맞았습니다!');
//   } else {
//     alert('틀렸습니다!');
//   }
// })
// boxes[1].addEventListener('click', () => {
//   if (correctAnswer === 1) {
//     alert('맞았습니다!');
//   } else {
//     alert('틀렸습니다!');
//   }
// })
// boxes[2].addEventListener('click', () => {
//   if (correctAnswer === 2) {
//     alert('맞았습니다!');
//   } else {
//     alert('틀렸습니다!');
//   }
// })

// 틀리면 1. 새 판을 여러번 생성(함수) 2. Score 0
function newStage() {
  const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()];
  boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
  });
  const correctAnswer = Math.floor(3 * Math.random());
  colorCodeEl.textContent = colorCodes[correctAnswer];
} // 중복 실행되는 코드들을 모아서 함수로 묶어서 아래에서 호출

document.querySelector('.modal.right .close').addEventListener('click', () => {
  document.querySelector('.modal.right').classList.remove('show');
})
document.querySelector('.modal.bad .close').addEventListener('click', () => {
  document.querySelector('.modal.bad').classList.remove('show');
})


newStage();