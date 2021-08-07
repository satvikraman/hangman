class hangman {
    constructor(lang) {
        this.lang = lang;
        this.parseCsvFile();
    }; 

    choosePuzzle() {
        let randomRow = Math.floor(Math.random()*this.puzzles.data.length);
        this.q = this.puzzles.data[randomRow][0];
        this.ans = this.q.replace(/[a-zA-Z]/ig, '_'); 
        console.log(this.puzzles.data[randomRow][0],  this.puzzles.data[randomRow][1]);
        this.wrongAns = 0;
        this.rightAns = 0;
        this.attempts = [];
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

    checkUserInput(event) {
        if (this.attempts.indexOf(event.key) == -1) {
            this.attempts.push(event.key);
            var letterFound = false;
            for (let i = 0; i < this.q.length; i++) {
                if (event.key == this.q[i]) {
                    letterFound = true;    
                }  
            }   
            if (letterFound == true) {
                this.rightAns++;
            } else {
                this.wrongAns++;
            } 
        }

        console.log(this.rightAns);
        console.log(this.wrongAns);
    }
}

document.addEventListener("keypress", event =>{
    game.checkUserInput(event);
}); 

game = new hangman("german");
