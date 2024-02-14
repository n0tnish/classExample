class Person{
    //a class is a template or blueprint to create objects
    //a method is a function defined within a class. ie an exclusive function
    static count = 0 //universal nommer
    constructor(){
        //you can't create an object or a class instance without a constructor
        this.firstName = "nancy"
        this.lastName = "arjam"
        this.age = 0
        Person.count += 1
    }
    set FirstName(value) {  //setter lets you update values (js)
        this.firstName = value
    }
    get FirstName() { //getter lets you retreive values (js)
        return this.firstName
    }
    setLastName(value) {
        this.lastName = value
    }
    get LastName() {
        return this.lastName 
    }
    set Age(value) {
        this.Age = value
    }
    get Age( ){
        return this.Age
    }
    //display details
    display() {
        console.log(`
        =====Person ID: ${ Person.count }=====
        First name: ${ this.FirstName }
        Last name: ${ this.LastName }
        Age: ${ this.Age }
        ======================== 
        `);
    }
}
export {
    Person
}