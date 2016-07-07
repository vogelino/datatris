import containsCharacter from '../../src/atoms/containsCharacter';
import expect from 'expect';

describe('containsCharacter', () => {

	it('should throw an error if more than one character', () => {
		const character = 'abc';
		const expected = () => containsCharacter('string', character);
		expect(expected).toThrow(/MORE_THAN_ONE_CHAR/);
	});

	it('should throw an error if string is empty', () => {
		const string = '';
		const expected = () => containsCharacter(string, 'character');
		expect(expected).toThrow(/EMPTY_STRING/);
	});

	it('should throw an error if given string is not a string', () => {
		const string = true;
		const expected = () => containsCharacter(string, 'character');
		expect(expected).toThrow(/STRING_NOT_A_STRING/);
	});

	it('should throw an error if given character is not a string', () => {
		const character = true;
		const expected = () => containsCharacter('string', character)
		expect(expected).toThrow(/CHARACTER_NOT_A_STRING/);
	});

	it('should return true if the character is contained', () => {
		const character = 'a';
		const expected = containsCharacter('abc', character)
		expect(expected).toEqual(true);
	});

});
