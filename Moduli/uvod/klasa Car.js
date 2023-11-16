class Car {
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    start(){
        console.log("Upali:" + (this.make) + " " + (this.model));
    }

}
const mojAuto = new Car("Toyota","Corolla",2017);
const drugiAuto = new Car("Ford","Fiesta",2010);
console.log(mojAuto,drugiAuto);
mojAuto.start();
drugiAuto.start();
console.log("***********************");

class electricCar extends Car{
    constructor(make,model,year,batteryCapacity){
        super(make,model,year);
        this.batteryCapacity =batteryCapacity;

    }
    charge(){
        console.log("Punjenje:" + (this.make) + " " + (this.model) + " " + (this.batteryCapacity));
    }
}
const elAuto = new electricCar("Tesla","Model S",(2020),80 + "kwh");
elAuto.charge();
elAuto.start();

