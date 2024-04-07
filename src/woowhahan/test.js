function solution(nodes) {
  return nodes.reduce((result, node) => {
    node.forEach((point) => {
      if (!result.includes(point)) result.push(point);
      else result.splice(result.indexOf(point), 1);
    });
    return result;
  }, []);
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
); // [1,10]
console.log(
  solution([
    [1, 1],
    [2, 2],
    [1, 2],
  ])
); // [2,1]
/**
 * 직사각형을 만드는데 필요한 3개의 좌표를 준다 나머지 좌표를 구해라
 */
