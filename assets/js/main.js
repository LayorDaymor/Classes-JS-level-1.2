class Person {
    constructor(name, age /* wenn wir kein wert als age haben dann => */=0) {
        this.name=name;
        this.age=age;

    }
    info(){
        return `${this.name}s age is ${this.age}`
    }
}


let emanuel =new Person("Emanuel",18)

console.log(emanuel.info());