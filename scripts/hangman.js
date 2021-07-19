class hangman {
    constructor(lang) {
        this.lang = lang;
        this.wrongAns = 0;
        this.rightAns = 0;
        this.parseCsvFile();
    }
    parseCsvFile() {
        // Parse local CSV file
        let csvString = "Apple,Fruit\nFootball, Team sport"
        let result = Papa.parse(csvString);
        console.log(result.data.length);
    }
}

game = new hangman ("english");