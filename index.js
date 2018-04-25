function randomNum() {
  return Math.floor(256 * Math.random());
}
function randomColorCode() {
  return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}

const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box');

let correctAnswer;
let score = 0;
document.querySelector('.score').textContent = score;

// 맞으면(컬러코드를 클릭했을 때) 1. 컬러코드 중 하나를 randomColorCode에 표시 2. Score +1
// 컬러코드를 클릭했을 때 반응 - 이벤트 리스너 - forEach로 
boxes.forEach((el, index) => {
  el.addEventListener('click', () => {
    el.classList.add('large'); // 클릭했을 때 자기 자신에게 붙이기 위해서 제일 상위에 넣기
      if (correctAnswer === index) {
        score++;
        document.querySelector('.modal.right').classList.add('show'); // 클래스 동적으로 추가하기 준비
      } else {
        score = 0;
        document.querySelector('.modal.bad').classList.add('show');
      }
    document.querySelector('.score').textContent = score; // 화면에 반영
  })  
});

// 틀리면 1. 새 판을 여러번 생성(함수) 2. Score 0
function newStage() {
  const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()];
  boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
  });
  correctAnswer = Math.floor(3 * Math.random());
  colorCodeEl.textContent = colorCodes[correctAnswer];
} // 중복 실행되는 코드들을 모아서 함수로 묶어서 아래에서 호출

// 정답 결과 화면 1. 맞았을 때
document.querySelector('.modal.right .close').addEventListener('click', () => {
  newStage();
  boxes.forEach((el, index) => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.right').classList.remove('show');
})
// 2. 틀렸을 때
document.querySelector('.modal.bad .close').addEventListener('click', () => {
  newStage();
  boxes.forEach((el, index) => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.bad').classList.remove('show');
})

newStage();