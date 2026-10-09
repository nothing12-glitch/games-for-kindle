(function() {
    'use strict';
    
    const translations = {
        en: {
            title: "Modern Games",
            subtitle: "Optimized for touchscreen Kindle",
            backToHome: "Back to Home",
            sections: {
                puzzles: "Puzzles & Logic",
                arcade: "Arcade Games",
                quests: "Text Quests",
                word: "Word Games",
                board: "Board Games"
            },
            games: {
                sudoku: { name: "Sudoku", desc: "Classic logic puzzle" },
                hangman: { name: "Hangman", desc: "Guess the word" },
                minesweeper: { name: "Minesweeper", desc: "Find all mines" },
                tictactoe: { name: "Tic-Tac-Toe", desc: "Play vs computer" },
                memory: { name: "Memory", desc: "Find matching pairs" },
                wordle: { name: "Word Guess", desc: "5-letter word game" },
                quiz: { name: "Quiz", desc: "10 questions" },
                chess: { name: "Chess", desc: "Classic 8x8 board" },
                game2048: { name: "2048", desc: "Combine numbers" },
                snake: { name: "Snake", desc: "Classic arcade" },
                puzzle15: { name: "Puzzle 15", desc: "Arrange numbers" },
                reaction: { name: "Reaction Test", desc: "Test your speed" },
                tetris: { name: "Tetris", desc: "Block-stacking game" }
            }
        },
        uk: {
            title: "Сучасні ігри",
            subtitle: "Оптимізовано для сенсорного Kindle",
            backToHome: "На головну",
            sections: {
                puzzles: "Головоломки",
                arcade: "Аркади",
                quests: "Текстові квести",
                word: "Словесні ігри",
                board: "Настільні ігри"
            },
            games: {
                sudoku: { name: "Судоку", desc: "Класична логічна гра" },
                hangman: { name: "Шибениця", desc: "Вгадай слово" },
                minesweeper: { name: "Сапер", desc: "Знайди всі міни" },
                tictactoe: { name: "Хрестики-нулики", desc: "Гра проти комп'ютера" },
                memory: { name: "Меморі", desc: "Знайди пари карток" },
                wordle: { name: "Вгадай слово", desc: "Слово з 5 літер" },
                quiz: { name: "Вікторина", desc: "10 питань" },
                chess: { name: "Шахи", desc: "Класична гра" },
                game2048: { name: "2048", desc: "З'єднуй числа" },
                snake: { name: "Змійка", desc: "Класична аркада" },
                puzzle15: { name: "П'ятнашки", desc: "Розташуй числа" },
                reaction: { name: "Тест на реакцію", desc: "Перевір швидкість" },
                tetris: { name: "Тетріс", desc: "Гра з блоками" }
            }
        },
        de: {
            title: "Moderne Spiele",
            subtitle: "Optimiert für Touchscreen Kindle",
            backToHome: "Zurück",
            sections: {
                puzzles: "Puzzles",
                arcade: "Arcade",
                quests: "Text-Quests",
                word: "Wortspiele",
                board: "Brettspiele"
            },
            games: {
                sudoku: { name: "Sudoku", desc: "Logikrätsel" },
                hangman: { name: "Galgenmännchen", desc: "Wort erraten" },
                minesweeper: { name: "Minesweeper", desc: "Minen finden" },
                tictactoe: { name: "Tic-Tac-Toe", desc: "Gegen Computer" },
                memory: { name: "Memory", desc: "Paare finden" },
                wordle: { name: "Wort-Raten", desc: "5-Buchstaben-Wort" },
                quiz: { name: "Quiz", desc: "10 Fragen" },
                chess: { name: "Schach", desc: "Brettspiel" },
                game2048: { name: "2048", desc: "Zahlen kombinieren" },
                snake: { name: "Snake", desc: "Arcade-Spiel" },
                puzzle15: { name: "Puzzle 15", desc: "Zahlen ordnen" },
                reaction: { name: "Reaktionstest", desc: "Geschwindigkeit testen" },
                tetris: { name: "Tetris", desc: "Block-Spiel" }
            }
        },
        pl: {
            title: "Nowoczesne gry",
            subtitle: "Zoptymalizowane dla dotykowego Kindle",
            backToHome: "Powrót",
            sections: {
                puzzles: "Puzzle",
                arcade: "Arcade",
                quests: "Questy tekstowe",
                word: "Gry słowne",
                board: "Gry planszowe"
            },
            games: {
                sudoku: { name: "Sudoku", desc: "Łamigłówka logiczna" },
                hangman: { name: "Wisielec", desc: "Zgadnij słowo" },
                minesweeper: { name: "Saper", desc: "Znajdź miny" },
                tictactoe: { name: "Kółko i krzyżyk", desc: "Przeciw komputerowi" },
                memory: { name: "Memory", desc: "Znajdź pary" },
                wordle: { name: "Zgadnij słowo", desc: "5-literowe słowo" },
                quiz: { name: "Quiz", desc: "10 pytań" },
                chess: { name: "Szachy", desc: "Gra planszowa" },
                game2048: { name: "2048", desc: "Łącz liczby" },
                snake: { name: "Wąż", desc: "Gra arkadowa" },
                puzzle15: { name: "Puzzle 15", desc: "Ułóż liczby" },
                reaction: { name: "Test reakcji", desc: "Sprawdź szybkość" },
                tetris: { name: "Tetris", desc: "Gra w bloki" }
            }
        }
    };

    function getLanguage() {
        try {
            const saved = localStorage.getItem('language');
            if (saved && translations[saved]) return saved;
            const browserLang = (navigator.language || 'en').split('-')[0];
            if (translations[browserLang]) return browserLang;
        } catch(e) {}
        return 'en';
    }

    function setLanguage(lang) {
        try { localStorage.setItem('language', lang); } catch(e) {}
        applyTranslations();
    }

    function t(key) {
        const lang = getLanguage();
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (!value || !value[k]) return key;
            value = value[k];
        }
        return value;
    }

    function applyTranslations() {
        try {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const translated = t(key);
                if (translated) el.textContent = translated;
            });
        } catch(e) {}
    }

    function addLanguageSelector() {
        try {
            const selector = document.createElement('div');
            selector.style.cssText = 'position:fixed;top:10px;right:10px;z-index:1000;';
            selector.innerHTML = `
                <select onchange="window.setLanguage(this.value)" style="padding:8px;font-size:14px;border:2px solid #000;border-radius:4px;background:#fff;">
                    <option value="en" ${getLanguage()==='en'?'selected':''}>EN</option>
                    <option value="uk" ${getLanguage()==='uk'?'selected':''}>UK</option>
                    <option value="de" ${getLanguage()==='de'?'selected':''}>DE</option>
                    <option value="pl" ${getLanguage()==='pl'?'selected':''}>PL</option>
                </select>
            `;
            document.body.appendChild(selector);
        } catch(e) {}
    }

    window.setLanguage = setLanguage;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            applyTranslations();
            addLanguageSelector();
        });
    } else {
        applyTranslations();
        addLanguageSelector();
    }
})();
