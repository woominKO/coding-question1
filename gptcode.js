function findLongestAlternatingArray() {
  let N = parseInt(prompt('양의 정수 N을 입력하세요:'));
  let inputArray = [];
  let count = 1;
  let maxLength = 1;

  for (let i = 0; i < N; i++) {
    let num = parseInt(prompt('정수를 입력하세요:'));
    inputArray.push(num);
  }
  //--------이해됨-------

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

// 사용자로부터 양의 정수 N을 입력받습니다.
// N개의 정수를 입력받아 inputArray 배열에 저장합니다.
// count 변수를 사용하여 연속해서 부호가 교대로 나오는 배열의 길이를 세는 작업을 수행합니다.
// maxLength 변수를 사용하여 지금까지 발견한 가장 긴 부호 교대 배열의 크기를 저장합니다.
// 배열을 순회하면서 인접한 두 요소의 부호를 비교하고, 부호가 교대로 나오는 경우 count를 증가시킵니다. 그렇지 않은 경우에는 현재까지의 count를 maxLength와 비교하고, 더 큰 값으로 업데이트합니다.
// 배열 순회가 끝난 후에도 count가 maxLength보다 큰 경우가 있을 수 있으므로 한 번 더 확인하여 최종 maxLength를 결정합니다.
// maxLength를 출력합니다.
// 이 프로그램은 입력된 정수들 중에서 부호가 교대로 나오는 배열들 중에서 가장 긴 배열의 크기를 찾아 출력합니다.
