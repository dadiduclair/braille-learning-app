const brailleAlphabet = {
    'A': '⠁',
    'B': '⠃',
    'C': '⠉',
    'D': '⠙',
    'E': '⠑',
    'F': '⠋',
    'G': '⠛',
    'H': '⠓',
    'I': '⠊',
    'J': '⠚',
    'K': '⠅',
    'L': '⠇',
    'M': '⠍',
    'N': '⠝',
    'O': '⠕',
    'P': '⠏',
    'Q': '⠟',
    'R': '⠗',
    'S': '⠎',
    'T': '⠞',
    'U': '⠥',
    'V': '⠧',
    'W': '⠺',
    'X': '⠭',
    'Y': '⠽',
    'Z': '⠵',
    'ç': '⠯',
    'é': '⠿',
    'à': '⠷',
    'è': '⠮',
    
};

function showBraille(letter) {
    const brailleDisplay = document.getElementById('braille-display');
    brailleDisplay.innerText = `La lettre ${letter} en braille est ${brailleAlphabet[letter]}`;
}
