class hangman {
    constructor(lang) {
        this.lang = lang;
        this.wrongAns = 0;
        this.rightAns = 0;
        this.parseCsvFile();
    }

    choosePuzzle() {
        let randomRow = Math.floor(Math.random()*this.puzzles.data.length);
        console.log(this.puzzles.data[randomRow][0],  this.puzzles.data[randomRow][1]);
    }

    // parse csv file and store all the puzzles
    parseCsvFile() {
        // Parse local CSV file
        if (this.lang == "english") {
            let csvFile = "https://satvikraman.github.io/hangman/assets/english.csv";
        } else {
            let csvFile = "https://satvikraman.github.io/hangman/assets/german.csv";
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
}

game = new hangman("english");