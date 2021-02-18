// need to add the valid tests for location

import isValidCoordinates from './main.js';


//negative test case that checks when the given co-ordinates are null 
// and should return false.

describe('isValidCoordinates function', () => {
    it('checks whether the coordinates are valid', () => {
      expect(isValidCoordinates({})).toEqual(false);
    });
  });