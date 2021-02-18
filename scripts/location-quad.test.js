// need to add the valid tests for location

import isValidCoordinates from './main.js';


//negative test case that checks when the device co-ordinates are null 
// and location coordinates are given as undefined should throw an error.

describe('isValidCoordinates function', () => {
    it('checks whether the coordinates are valid', () => {
      expect(isValidCoordinates({})).toEqual(false);
    });
  });