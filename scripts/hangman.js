class hangman {
    constructor(lang) {
        this.lang = lang;
        this.wrongAns = 0;
        this.rightAns = 0;
        this.parseCsvFile();
    }

    choosePuzzle() {
        let randomRow = Math.floor(Math.random()*this.puzzles.data.length);
        this.q = this.puzzles.data[randomRow][0];
        console.log(this.puzzles.data[randomRow][0],  this.puzzles.data[randomRow][1]);
    }

    // parse csv file and store all the puzzles
    parseCsvFile() {
        var csvFile;
        // Parse local CSV file
        if (this.lang == "english") {
            csvFile = "https://satvikraman.github.io/hangman/assets/english.csv";
        } else {
            csvFile = "https://satvikraman.github.io/hangman/assets/german.csv";
        }
        Papa.parse(csvFile, 
                    {
                        download: true,
                        complete: result => {
                            this.puzzles = result;
                            this.choosePuzzle();
                        }
                    });
    }

    checkUserInput() {
        console.log(this.q);
    }
}

document.addEventListener("keypress", event => {
    game.checkUserInput();
});

game = new hangman("german");