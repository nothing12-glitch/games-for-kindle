(function() {
    'use strict';
    
    const translations = {
        en: {
            title: "Modern Games",
            subtitle: "Optimized for touchscreen Kindle Paperwhite, Oasis and Scribe",
            backToHome: "Back to Home",
            sections: {
                puzzles: "Puzzles & Logic",
                arcade: "Arcade Games",
                quests: "Text Quests",
                word: "Word Games",
                board: "Board Games"
            },
            games: {
                sudoku: { name: "Sudoku", desc: "Classic logic puzzle with numbers" },
                hangman: { name: "Hangman", desc: "Guess the word letter by letter" },
                minesweeper: { name: "Minesweeper", desc: "Find all mines on the field" },
                tictactoe: { name: "Tic-Tac-Toe", desc: "Play against computer" },
                memory: { name: "Memory", desc: "Find matching pairs of cards" },
                wordle: { name: "Word Guess", desc: "5 attempts to guess a 5-letter word" },
                quiz: { name: "Quiz", desc: "10 questions on various topics" },
                chess: { name: "Chess", desc: "Classic 8x8 board game" },
                game2048: { name: "2048", desc: "Combine numbers to reach 2048" },
                snake: { name: "Snake", desc: "Classic arcade game" },
                puzzle15: { name: "Puzzle 15", desc: "Arrange numbers in order" },
                reaction: { name: "Reaction Test", desc: "Test your reaction speed" },
                tetris: { name: "Tetris", desc: "Classic block-stacking game" },
                cards: { name: "Solitaire", desc: "Classic card game" }
            }
        },
        uk: {
            title: "Сучасні ігри",
            subtitle: "Оптимізовано для сенсорних екранів Kindle Paperwhite, Oasis та Scribe",
            backToHome: "На головну",
            sections: {
                puzzles: "Головоломки та логіка",
                arcade: "Аркадні ігри",
                quests: "Текстові квести",
                word: "Словесні ігри",
                board: "Настільні ігри"
            },
            games: {
                sudoku: { name: "Судоку", desc: "Класична логічна гра з цифрами" },
                hangman: { name: "Шибениця", desc: "Вгадайте слово по літерах" },
                minesweeper: { name: "Сапер", desc: "Знайдіть всі міни на полі" },
                tictactoe: { name: "Хрестики-нулики", desc: "Гра проти комп'ютера" },
                memory: { name: "Меморі", desc: "Знайдіть пари однакових карток" },
                wordle: { name: "Вгадай слово", desc: "5 спроб вгадати слово з 5 літер" },
                quiz: { name: "Вікторина", desc: "10 питань на різні теми" },
                chess: { name: "Шахи", desc: "Класична гра на дошці 8x8" },
                game2048: { name: "2048", desc: "З'єднуйте числа, щоб отримати 2048" },
                snake: { name: "Змійка", desc: "Класична аркадна гра" },
                puzzle15: { name: "П'ятнашки", desc: "Розташуйте числа по порядку" },
                reaction: { name: "Тест на реакцію", desc: "Перевірте швидкість своєї реакції" },
                tetris: { name: "Тетріс", desc: "Класична гра з блоками" },
                cards: { name: "Пасьянс", desc: "Класична карткова гра" }
            }
        },
        de: {
            title: "Moderne Spiele",
            subtitle: "Optimiert für Touchscreen Kindle Paperwhite, Oasis und Scribe",
            backToHome: "Zurück zur Startseite",
            sections: {
                puzzles: "Puzzles & Logik",
                arcade: "Arcade-Spiele",
                quests: "Text-Quests",
                word: "Wortspiele",
                board: "Brettspiele"
            },
            games: {
                sudoku: { name: "Sudoku", desc: "Klassisches Logikrätsel mit Zahlen" },
                hangman: { name: "Galgenmännchen", desc: "Errate das Wort Buchstabe für Buchstabe" },
                minesweeper: { name: "Minesweeper", desc: "Finde alle Minen auf dem Feld" },
                tictactoe: { name: "Tic-Tac-Toe", desc: "Spiele gegen den Computer" },
                memory: { name: "Memory", desc: "Finde passende Kartenpaare" },
                wordle: { name: "Wort-Raten", desc: "5 Versuche, ein 5-Buchstaben-Wort zu erraten" },
                quiz: { name: "Quiz", desc: "10 Fragen zu verschiedenen Themen" },
                chess: { name: "Schach", desc: "Klassisches 8x8-Brettspiel" },
                game2048: { name: "2048", desc: "Kombiniere Zahlen, um 2048 zu erreichen" },
                snake: { name: "Snake", desc: "Klassisches Arcade-Spiel" },
                puzzle15: { name: "Puzzle 15", desc: "Ordne Zahlen der Reihe nach an" },
                reaction: { name: "Reaktionstest", desc: "Teste deine Reaktionsgeschwindigkeit" },
                tetris: { name: "Tetris", desc: "Klassisches Block-Stapelspiel" },
                cards: { name: "Solitaire", desc: "Klassisches Kartenspiel" }
            }
        },
        pl: {
            title: "Nowoczesne gry",
            subtitle: "Zoptymalizowane dla dotykowych Kindle Paperwhite, Oasis i Scribe",
            backToHome: "Powrót do strony głównej",
            sections: {
                puzzles: "Puzzle i logika",
                arcade: "Gry arcade",
                quests: "Questy tekstowe",
                word: "Gry słowne",
                board: "Gry planszowe"
            },
            games: {
                sudoku: { name: "Sudoku", desc: "Klasyczna łamigłówka logiczna z liczbami" },
                hangman: { name: "Wisielec", desc: "Zgadnij słowo litera po literze" },
                minesweeper: { name: "Saper", desc: "Znajdź wszystkie miny na polu" },
                tictactoe: { name: "Kółko i krzyżyk", desc: "Gra przeciwko komputerowi" },
                memory: { name: "Memory", desc: "Znajdź pasujące pary kart" },
                wordle: { name: "Zgadnij słowo", desc: "5 prób na odgadnięcie 5-literowego słowa" },
                quiz: { name: "Quiz", desc: "10 pytań na różne tematy" },
                chess: { name: "Szachy", desc: "Klasyczna gra na planszy 8x8" },
                game2048: { name: "2048", desc: "Łącz liczby, aby osiągnąć 2048" },
                snake: { name: "Wąż", desc: "Klasyczna gra arkadowa" },
                puzzle15: { name: "Puzzle 15", desc: "Ułóż liczby w kolejności" },
                reaction: { name: "Test reakcji", desc: "Sprawdź szybkość swojej reakcji" },
                tetris: { name: "Tetris", desc: "Klasyczna gra w układanie bloków" },
                cards: { name: "Pasjans", desc: "Klasyczna gra karciana" }
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
        try {
            localStorage.setItem('language', lang);
        } catch(e) {}
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
    window.t = t;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            applyTranslations();
            addLanguageSelector();
        });
    } else {
        applyTranslations();
        addLanguageSelector();
    }
})();s2sw2
