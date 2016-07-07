/*global describe*/
/*global it*/
import containsOneOfCharacters from '../../src/molecules/containsOneOfCharacters';
import expect from 'expect';

describe('containsOneOfCharacters', () => {

	it('should throw an error if the given characters are not an array', () => {
		const characters = 'abc';
		const expected = () => containsOneOfCharacters('string', characters);
		expect(expected).toThrow(/CHARACTERS_NO_ARRAY/);
	});

	it('should throw an error if not given the characters are empty', () => {
		const characters = [];
		const expected = () => containsOneOfCharacters('string', characters);
		expect(expected).toThrow(/NO_GIVEN_CHARACTERS/);
	});

	it('should return true if one the given characters are in the string', () => {
		const characters = [ 'a', 'b', 'c' ];
		const expected = containsOneOfCharacters('string with a', characters);
		expect(expected).toEqual(true);
	});

});
