const brailleAlphabet = {
    'A': '⠁',
    'B': '⠃',
    'C': '⠉',
    // Ajoutez les autres lettres ici
};

function showBraille(letter) {
    const brailleDisplay = document.getElementById('braille-display');
    brailleDisplay.innerText = `La lettre ${letter} en braille est ${brailleAlphabet[letter]}`;
}
