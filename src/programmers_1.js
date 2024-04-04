/**
 *
 * @param {*} friends 친구들의 수 50 이하
 * @param {*} gifts "선물을준친구 선물을받은친구"
 *
 * 카카오톡 선물하기
 * 다음달에 누가 선물을 많이 받을까 예측
 * 선물을 많이 준사람이 다음달에 선물을 하나받음
 * 선물기록이 없거나 같다면 선물지수를 비교한다 (큰사람이 받음)
 * 선물지수란 준 선물 - 받은선물
 * 모두 같다? 다음달 선물 없음
 *
 * 다음달에 가장 선물을 많이 받을 친구의 선물의 수
 * @returns
 */
function solution(
  friends = ["joy", "brad", "alessandro", "conan", "david", "kelly"],
  gifts = [
    "alessandro brad",
    "alessandro joy",
    "alessandro conan",
    "david alessandro",
    "alessandro david",
  ]
) {
  const friendsGiftPoint = {};
  const friendGiftCount = {};

  gifts.forEach((sendInfo) => {
    const [give, take] = sendInfo.split(" ");
    friendsGiftPoint[give] = (friendsGiftPoint[give] ?? 0) + 1;
    friendsGiftPoint[take] = (friendsGiftPoint[take] ?? 0) - 1;

    if (!friendGiftCount[give]) friendGiftCount[give] = {};
    friendGiftCount[give][take] = (friendGiftCount[give][take] ?? 0) + 1;
  });
  return friends
    .map((name, _, origin) => {
      let myScore = 0;
      origin
        .filter((friend) => friend !== name)
        .forEach((friend) => {
          const giftToFriend = (friendGiftCount[name] ?? {})[friend] ?? 0;
          const giftToMe = (friendGiftCount[friend] ?? {})[name] ?? 0;

          if (
            giftToFriend > giftToMe ||
            (giftToFriend === giftToMe &&
              (friendsGiftPoint[name] ?? 0) > (friendsGiftPoint[friend] ?? 0))
          ) {
            myScore++;
          }
        });
      return myScore;
    })
    .sort((a, b) => b - a)
    .shift();
}

console.log(solution());
