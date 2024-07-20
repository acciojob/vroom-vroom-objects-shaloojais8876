// Complete the js code
class Car{
	constructor(make,model,){
		
		this.make = make;
		this.model = model;
	}
	getMakeModel(){
		return this.make + " " + this.model;
	}
}
class SportsCar extends Car{
	constructor(make,model,topSpeed){
		super(make,model);
		this.make = make;
		this.model = model;
		this.topSpeed = topSpeed;
	}
	getTopSpeed(){
		this.getMakeModel()
		return this.topSpeed;
	}
}
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());
window.Car = Car;
window.SportsCar = SportsCar;
