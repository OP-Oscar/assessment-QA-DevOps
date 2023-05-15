const shuffle = require("../src/shuffle");
const testArray = [1,2,3,4];

describe("shuffle should....", () => {

  test("return array", () => {
    let shuffledArray = shuffle(testArray)
     expect(Array.isArray(shuffledArray)).toBe(true);
    });

  test("return array same length", () => {
    let shuffledArray = shuffle(testArray)
    let sameLength = testArray.length === shuffledArray.length
    expect(sameLength).toBe(true)
    });

  test("return shuffled array", () => {
    let shuffledArray = shuffle(testArray)
    let is_same = (testArray.length == shuffledArray.length) && testArray.every(function(element, index) {
      return element === shuffledArray[index]; 
    });
    expect(is_same).toBe(false)
    });

    it('maintain same elements of original array', () => {
      let shuffledArray = shuffle(testArray)
      expect(shuffledArray).toEqual(expect.arrayContaining(testArray));
    });

});
