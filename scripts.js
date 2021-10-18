
class Traveler {
    constructor(name){
        this.nome       = name
        this._food      = 1
        this._isHealthy = true
    }
    get food (){
        return this._food
    }
    set food (newFood){
        this._food=newFood
        return newFood
    }

    get isHealthy (){
        return this._isHealthy
    }
    set isHealthy (bool){
        return this.isHealthy=bool
    }
    hunt () {
        this.food+=2
        return this.food
    }
    eat () {
        if(this.food>0){
            this.food-=1
            return this.food
        }
        else{
            this._isHealthy=false
            return `${this.name} is sick!`
        }
    }
    
}

class Wagon {
    constructor (capacity){
        this.capacity=capacity
        this._passagers=[]
    }
    get passagers(){
        return _passagers
    }
    getAvailableSeatCount () {
        return this.capacity-this._passagers.length
    }
    join (newPassager){
        if(this.getAvailableSeatCount()>0){
            this._passagers.push(newPassager)
            return this._passagers
        }
        else{
            return `${this.name} has no more open seats`
        }
    }

    shouldQuarantine () {
        for (let i=0 ; i<=this._passagers.length ; i++ ){
            if (this._passagers[i].isHealthy===false){
                return true
            }
        }
        return false
    }
    totalFood () {
        let totalFood = 0
        for (let i=0 ; i<this._passagers.length ; i++ ){
            totalFood+=this._passagers[i].food
        }
        return totalFood
    }
}


// Código Teste(Não modificar)

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
