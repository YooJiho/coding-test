function solution(r, delivery) {
  const totalTips = [];

  function goToDelivery(node, curtime, prevvisited, totalTip) {
    const time = curtime || 0;
    const visited = prevvisited ?? [];
    const [i, j] = node;

    if (delivery[i * r + j]) {
      const [limitTime, tip] = delivery[i * r + j];
      if (time <= limitTime && !visited.includes(i * r + j)) {
        [
          [i, j + 1],
          [i, j - 1],
          [i - 1, j],
          [i + 1, j],
        ].forEach((node) => {
          goToDelivery(
            node,
            time + 1,
            visited.push(i * r + j) && visited,
            totalTip + tip
          );
        });
      } else totalTips.push(totalTip);
    } else totalTips.push(totalTip);
  }

  goToDelivery([0, 0], 0, [], 0);
  return totalTips.sort((a, b) => b - a).shift();
}

console.log(
  solution(3, [
    [1, 5],
    [8, 3],
    [4, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [4, 2],
    [5, 2],
    [4, 1],
  ])
);
