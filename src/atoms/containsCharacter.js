
const MORE_THAN_ONE_CHAR = 'MORE_THAN_ONE_CHAR';
const EMPTY_STRING = 'EMPTY_STRING';
const STRING_NOT_A_STRING = 'STRING_NOT_A_STRING';
const CHARACTER_NOT_A_STRING = 'CHARACTER_NOT_A_STRING';

const validateString = (string) => {
	if (string.length === 0) 			throw new Error(EMPTY_STRING);
	if (typeof string !== 'string') 	throw new Error(STRING_NOT_A_STRING);
	return true;
}

const validateCharacter = (character) => {
	if (character.length === 0) 		throw new Error(EMPTY_STRING);
	if (character.length > 1) 			throw new Error(MORE_THAN_ONE_CHAR);
	if (typeof character !== 'string') 	throw new Error(CHARACTER_NOT_A_STRING);
	return true;
}

export default (string, character) => {
	validateString(string);
	validateCharacter(character);
	return string.includes(character);
};
