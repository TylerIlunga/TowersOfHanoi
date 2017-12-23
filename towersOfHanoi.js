(() => {
  'use strict';

  const show = value => JSON.stringify(value, null, 2);

  const hanoi = (num, firstChoice, secondChoice, thirdChoice) =>
    num ? hanoi(num - 1, firstChoice, thirdChoice, secondChoice)
            .concat([[firstChoice, secondChoice]])
            .concat(hanoi(num - 1, thirdChoice, secondChoice, firstChoice)) : [];

  const output = show(
      hanoi(3, 'LEFT', 'RIGHT', 'MIDDLE')
        .map(step => step[0] + ' -> ' + step[1]));

  return output;

})();
