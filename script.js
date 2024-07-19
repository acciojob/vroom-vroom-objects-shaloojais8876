// Complete the js code
class Car{
	constructor(make,model,){
		
		this.make = make;
		this.model = model;
	}
	getMakeModel(){
		return "Scorpio", 2001;
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
		return "bmw", 2000,40;
	}
}
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
