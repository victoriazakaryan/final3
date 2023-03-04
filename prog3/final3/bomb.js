let LivingCreature = require("./living")
module.exports = class Bomb extends LivingCreature {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 8;

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

    random(ch,ch1,ch2) {
        
             
        let found1 = this.chooseCell(ch)
        let found2 = this.chooseCell(ch1)
        let found3 = this.chooseCell(ch2)

        let found = found1.concat(found2,found3)
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }
    chooseCell(character) {

        this.getNewCoordinates();

        return super.chooseCell(character);

    }
    chooseCell(character) {
        let found = [];
        this.getNewCoordinates();
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] === character ) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }
    eat() {
     
    //   let found1 = this.chooseCell(2)
    // //   let found2 = this.chooseCell(3)
    //   let found = [found1, found2 ]
      let oneCell =this.random(2,3,1);
      console.log(oneCell);
      
    //   let oneCell = this.random(randomfound)
      
        if (oneCell) {
            this.energy += 5;
            let newX = oneCell[0];
            let newY = oneCell[1];
            if (matrix[newY][newX] === 2) {
                for (let i in grassEaterArr) {
                    if (newX === grassEaterArr[i].x && newY === grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[newY][newX] === 3) {
                for (let i in allEaterArr) {
                    if (newX === allEaterArr[i].x && newY === allEaterArr[i].y) {
                        allEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[newY][newX] === 1) {
                for (let i in grassArr) {
                    if (newX === grassArr[i].x && newY === grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX] = 4;
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
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if (this.energy <= 0) {
                this.die()
            }
        }
        // else {
        //     this.energy--;
        //     if (this.energy <= 0) {
        //         this.die()
        //     }
        // }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in bombArr) {
            if (bombArr[i].x === this.x && bombArr[i].y === this.y) {
                bombArr.splice(i, 1);
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
            matrix[y][x] = 4;
            let bomb = new Bomb(x, y);
            bombArr.push(bomb);
            this.energy = 15;
        }
    }
}