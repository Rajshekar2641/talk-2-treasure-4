// need to add the valid tests for location

import isInsideQuad from './main.js';


//negative test case that checks when the device co-ordinates are null 
// and location coordinates are given as undefined should throw an error.

describe('isInsideQuad function', () => {
    it('checks whether the device and location are valid', () => {
      expect(isInsideQuad({},undefined)).toEqual('Throws error');
    });
  });