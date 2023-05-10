let repeatN = prompt();
let arr = [];
repeatN = parseInt(repeatN);
for (i = 0; i < repeatN; i++) {
  let enter = prompt('정수입력');

  arr.push(enter);
}
let length = arr.length;

//로직
//랜덤으로 처음부터 끝까지 배열중 하나 선택하고 그것의 -1배열과 곱한값이 음수면 새로운 배열arrSelect에 push
//length(length - 2)/2 -> 모든 인수끼리 곱해보는 경우의 수 (n명의 사람이 모두 서로 악수하는 경우의 수와 비슷함)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

let newSelectedArr = [];
function findPattern() {
  for (i = 0; i < ((arr.length - 2) * arr.length) / 2; i++) {
    let randomIndex;
    randomIndex = getRandomInt(0, length - 1);
    if (arr[randomIndex] * arr[randomIndex + 1] < 0) {
      newSelectedArr.push(
        parseInt(arr[randomIndex]),
        parseInt(arr[randomIndex + 1])
      );
    }
  }
}

findPattern();
console.log(newSelectedArr);

//입력값 6
//-> -1,2,-3,4,5,6,
//출력값
//[-1, 2, -1, 2, -3, 4, 2, -3]
//순서, 겹처서 출력하는 문제 존재
//배열 메소드 사용해야 할듯
