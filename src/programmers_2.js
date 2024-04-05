/**
 *
 * @param {*} edges
 *
 * 도넛, 막대, 8자
 * 크기가 n, 정점 n, 간선 n >> 정점들을 방문한 뒤 돌아온다.
 * 크기가 n, 정점 n, 간선 n-1 >> 정점들을 한번씩 방문한다.
 * 크기가 n, 정점 2n+1, 간선 2n+2, 2개의 도넛의 정점을 골라 방문
 *
 * @returns
 */
function solution(
  edges = [
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
  ]
) {
  const routes = [];
  edges.forEach(([start, end], i) => {
    const routeIndex =
      routes.findIndex((route) => route.at(-1) === start) !== -1
        ? routes.findIndex((route) => route.at(-1) === start)
        : routes.length;

    if (routes[routeIndex]) routes[routeIndex].push(end);
    else (routes[routeIndex] = []).push(start, end);

    // 검증
    const mergeIndex = routes
      .filter((_, i) => i !== routeIndex)
      .findIndex((route) => route[0] === end);
    if (mergeIndex !== -1) {
      routes[routeIndex].push(...routes[mergeIndex].slice(1));
      routes.splice(mergeIndex, 1);
    }
  });
  console.log("------------------------------------------------------");

  // routes(route=> {
  //   const point = [...new Set(route)]
  //   if (point.length === route-1) // 도넛
  //   else if (point.length)
  // })

  return routes;
}

console.log(solution());
