```[문제 3-1] 양의 정수 N을 입력받은 후 , N개의 정수를 입력받는다(N<100). 입력받은 정수들 중에서 정수의 부호가 교대로 나오는 배열을 찾는다
이러한 부분 배열중에서 가장 긴 배열의 크기를 출력하는 프로그램을 작성하시오. 단 입력받는 정수는 중복될 수 있으며 부분 배열 중에서 가장 긴 배열의 크기를 가지는 배열은 오직 하나만 존재한다고 가정한다.```;

function findLongestAlternatingArray() {
  let N = parseInt(prompt('양의 정수 N을 입력하세요:'));
  let inputArray = [];
  let count = 1;
  let maxLength = 1;

  for (let i = 0; i < N; i++) {
    let num = parseInt(prompt('정수를 입력하세요:'));
    inputArray.push(num);
  }

  for (let i = 0; i < N - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] < 0) {
      count++;
    } else {
      if (count > maxLength) {
        maxLength = count;
      }
      count = 1;
    }
  }

  if (count > maxLength) {
    maxLength = count;
  }

  console.log('가장 긴 부호 교대 배열의 크기: ' + maxLength);
}

findLongestAlternatingArray();
