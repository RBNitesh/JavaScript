class Person {
  #name; // private member

  constructor(name, age) {
    this.#name = name;
    this._age = age;
  }

  // private function: accessible only inside the class
  #sayHello() {
    console.log(`Hello, my name is ${this.#name}.`);
  }

  introduce() {
    this.#sayHello();
  }
}

class Men extends Person {
  constructor(name, age) {
    super(name, age);
  }
  getAge() {
    return this._age; // protected member is accessible from child class
  }
}

const person1 = new Person("Joker", 30);
person1.introduce();

// Error: private member is not accessible
// console.log(person.#sayHello());

const person2 = new Men("Riyansh", 10);
console.log(person2.getAge());
