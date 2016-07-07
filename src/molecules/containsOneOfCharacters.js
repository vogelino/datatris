import containsCharacter from '../atoms/containsCharacter';

const CHARACTERS_NO_ARRAY = 'CHARACTERS_NO_ARRAY';
const NO_GIVEN_CHARACTERS = 'NO_GIVEN_CHARACTERS';

const validateCharacters = (characters) => {
	if (!Array.isArray(characters)) { 	throw new Error(CHARACTERS_NO_ARRAY); }
	if (characters.length === 0) { 		throw new Error(NO_GIVEN_CHARACTERS); }
	return true;
};

export default (string, characters) => {
	validateCharacters(characters);
	return characters.some((character) => containsCharacter(string, character));
};
