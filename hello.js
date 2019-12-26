class Hello {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log("Welcome " + this.name);
  }

  //added in branchA
  sayHi() {
    console.log("Hi! " + this.name);
  }

  sayHelo() {
    console.log("Hello! " + this.name);
  }
}

let sayWelcome = new Hello("Hasu");
sayWelcome.greeting();

//added in branchB

let sqrt = function(x) {
  return x * x;
};
