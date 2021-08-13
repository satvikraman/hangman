class hangman {
    constructor(lang) {
        this.lang = lang;
        this.parseCsvFile();
    }; 

    choosePuzzle() {
        let randomRow = Math.floor(Math.random()*this.puzzles.data.length);
        this.q = this.puzzles.data[randomRow][0];
        this.ans = this.q.replace(/[a-zA-Z]/ig, '_'); 
        document.getElementById("Ans").innerHTML = this.ans;
        console.log(this.puzzles.data[randomRow][0],  this.puzzles.data[randomRow][1]);
        document.getElementById("Clue").innerHTML = this.puzzles.data[randomRow][1];
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
        if ((this.attempts.indexOf(event.key) == -1) && (this.wrongAns < 6)) {
            this.attempts.push(event.key);
            var letterFound = false;
            for (let i = 0; i < this.q.length; i++) {
                if (event.key == this.q[i]) {
                    letterFound = true; 
                    this.ans = this.ans.substring(0, i) + event.key + this.ans.substring(i + 1, this.ans.length);  
                }  
            }   
            document.getElementById("Ans").innerHTML = this.ans;
            if (letterFound == true) {
                this.rightAns++;
            } else {
                this.wrongAns++;
                var picName = "img/hangman" + this.wrongAns + ".png";
                document.getElementById("Hangman").src = picName;
            } 
        }

        console.log(this.rightAns);
        console.log(this.wrongAns);
        console.log(this.ans);0
    }
}

document.addEventListener("keypress", event =>{
    game.checkUserInput(event);
}); 

game = new hangman("german");
