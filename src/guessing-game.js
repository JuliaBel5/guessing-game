class GuessingGame {
    
    constructor(x) {}
    currentMin = 0;
    currentMax = 0;
    currentValue = 0;


    setRange(min, max) {
        this.currentMin = min;
        this.currentMax = max;
    }

    guess() {
       this.currentValue = Math.floor(Math.round(this.currentMax -(this.currentMax - this.currentMin)/2));
            return this.currentValue
      }
    

    lower() {
        this.currentMax = this.currentValue
        }
    
    

    greater() {
        this.currentMin = this.currentValue
    }
}


module.exports = GuessingGame;
