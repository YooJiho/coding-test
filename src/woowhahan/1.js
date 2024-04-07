function solution(deq) {
  let index = 0; // 업데이트 중인 카운트 정보 index
  let counts = []; // 연속된 카운트 정보

  const result = [deq.shift()]; // 첫번째 원소를 넣고 시작한다.
  counts[index] = 1;

  while (deq.length) {
    if (result[result.length - 1] === deq.at(0)) {
      // 앞에서 먼저 비교
      result.push(deq.shift());
      counts[index]++;
    } else if (result[result.length - 1] === deq.at(-1)) {
      // 뒤에서 비교
      result.push(deq.pop());
      counts[index]++;
    } else {
      // 더이상 없다면 앞에 것을 넣는다. (연속카운트는 초기화 된다.)
      result.push(deq.shift());
      counts[++index] = 1;
    }
  }

  return counts.sort((a, b) => b - a).shift();
}

console.log(solution([0, 0, 1, 0, 1, 0]));
