let LivingCreature = require("./living")
module.exports = class AllEater extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }
    random(ch) {
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character, character1) {

        this.getNewCoordinates();

        return super.chooseCell(character, character1);

    }


    eat() {
        let allGrasses = this.chooseCell(1)
        let allGrassEaters = this.chooseCell(2)
        let all = allGrasses.concat(allGrassEaters)
        let oneCell = this.random(all)
        if (oneCell) {
            this.energy += 10;
            let newX = oneCell[0];
            let newY = oneCell[1];
            if (matrix[newY][newX] === 1) {
                for (let i in grassArr) {
                    if (newX === grassArr[i].x && newY === grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[newY][newX] === 2) {
                for (let i in grassArr) {
                    if (newX === grassEaterArr[i].x && newY === grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if (this.energy > 14) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }
    move() {
        // let found = this.chooseCell(0);
        let oneCell = this.random(0);
        if (oneCell) {
            let newX = oneCell[0];
            let newY = oneCell[1];
            this.energy--;
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if (this.energy <= 0) {
                this.die()
            }
        }
        else {
            this.energy--;
            if (this.energy <= 0) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in allEaterArr) {
            if (allEaterArr[i].x === this.x && allEaterArr[i].y === this.y) {
                allEaterArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        // let found = this.chooseCell(0);
        let oneCell = this.random(0);
        if (oneCell) {
            let x = oneCell[0];
            let y = oneCell[1];
            matrix[y][x] = 3;
            let allEater = new AllEater(x, y);
            allEaterArr.push(allEater);
            this.energy = 10;
        }
    }
}
