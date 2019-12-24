class Hello {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log("Welcome " + this.name);
  }
}

let sayWelcome = new Hello("Hasu");
sayWelcome.greeting();
