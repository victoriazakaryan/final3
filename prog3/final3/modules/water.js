let LivingCreature = require("./living")
module.exports = class Water extends LivingCreature {
    random(ch) {
        let found = this.chooseCell(ch)
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }




    mul() {
        this.multiply++;
        
        let emptyCell = this.random(0);
        if (emptyCell && this.multiply === 5) {
            let x = emptyCell[0];
            let y = emptyCell[1];
            matrix[y][x] = 5;
            let water = new Water(x, y);
            waterArr.push(water);
            this.multiply = 0;
        }
       
        }
    
}
