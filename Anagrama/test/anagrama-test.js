const should = require('should')

describe('find anagrams', () => {
  it('should return expected values when the value is not present', () => {
    const anagram = genAnagrams('ovo');
    assert.equal(arraysMatch(anagram,
      [
        'ov', 
        'oo', 
        'vo' 
      ]
      ));
    });
  })