const brailleAlphabet = {
    'a': '⠁',
    'b': '⠃',
    'c': '⠉',
    'd': '⠙',
    'e': '⠑',
    'f': '⠋',
    'g': '⠛',
    'h': '⠓',
    'i': '⠊',
    'j': '⠚',
    'k': '⠅',
    'l': '⠇',
    'm': '⠍',
    'n': '⠝',
    'o': '⠕',
    'p': '⠏',
    'q': '⠟',
    'r': '⠗',
    's': '⠎',
    't': '⠞',
    'u': '⠥',
    'v': '⠧',
    'w': '⠺',
    'x': '⠭',
    'y': '⠽',
    'z': '⠵',
    'ç': '⠯',
    'é': '⠿',
    'à': '⠷',
    'è': '⠮',
    
};

function showBraille(letter) {
    const brailleDisplay = document.getElementById('braille-display');
    brailleDisplay.innerText = `La lettre ${letter} en braille est ${brailleAlphabet[letter]}`;
}
