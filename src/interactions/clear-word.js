'use strict';

console.log('--- loading interaction -->');

/**
 * if there is a favorite word, the user is asked to confirm before clearing it.
 * if there is no saved word the user is told there is no word to clear
 */
const clearWord = () => {
    if (favoriteWord) {
        const clearConfirmation = confirm(`are you sure you want to clear "${favoriteWord}"?`);
        if (clearConfirmation) {
            favoriteWord = '';
            displayWord();
        } else {
            displayWord();
        }
    } else {
        displayWord();
    }
};
