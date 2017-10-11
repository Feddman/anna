class Person {
    // wat zijn eigenschappen
    constructor(name, age, eyeColor) {
      this.name = name;
      this.age = age;
      this.eyeColor = eyeColor;
    }

    greeting() {
      return "Hallo ik ben " +
              this.name +
              " en ik ben " +
              this.age +
              " jaar en mijn kleur ogen is " + this.eyeColor + ".";
    }
}


let person = new Person('Anna', 25, 'blue');
let newPerson = new Person('Fedde', 33, 'green');
window.alert( newPerson.greeting() );
