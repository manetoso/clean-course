(() => {
  const POSSIBLE_RED_FRUITS = ['manzana', 'cereza', 'ciruela'];

  function isRedFruit(fruit: string): boolean {
    return POSSIBLE_RED_FRUITS.includes(fruit);
  }

  const POSSIBLE_COLORS = ['red', 'yellow', 'purple'];

  const FRUITS_BY_COLORS = {
    red: ['manzana', 'fresa'],
    yellow: ['piña', 'banana'],
    purple: ['moras', 'uvas'],
  };

  function getFruitsByColor(color: string): string[] {
    if (!POSSIBLE_COLORS.includes(color))
      throw Error('the color must be: red, yellow, purple');

    return FRUITS_BY_COLORS[color as keyof typeof FRUITS_BY_COLORS];
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    return !isFourthStepWorking ? 'Fourth step broken.' : 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' });
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') });
  console.log({ yellowFruits: getFruitsByColor('yellow') });
  console.log({ purpleFruits: getFruitsByColor('purple') });
  // console.log({ pinkFruits: getFruitsByColor('pink') });

  // workingSteps
  console.log({ workingSteps: workingSteps() });
})();
