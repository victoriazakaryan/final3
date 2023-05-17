let LivingCreature = require("./living")
module.exports = class Fire extends LivingCreature {
    constructor(x,y){
        super(x,y)
        this.energy = 10
    }
    random(ch) {
        let found = this.chooseCell(ch)
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }




    eat() {
        let oneCell = this.random(5);
        if (oneCell) {
            this.energy += 10;
            let newX = oneCell[0];
            let newY = oneCell[1];
            for (let i in waterArr) {
                if (newX === waterArr[i].x && newY === waterArr[i].y) {
                    waterArr.splice(i, 1);
                    break;
                }
            }
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if (this.energy > 20) {
                this.mul();
            }
        }

    }
    mul() {
        // let found = this.chooseCell(0);
        let oneCell = this.random(0);
        if (oneCell) {
            let x = oneCell[0];
            let y = oneCell[1];
            matrix[y][x] = 6;
            let fire = new Fire(x, y);
            fireArr.push(fire);
            this.energy = 15;
        }
    }
}
