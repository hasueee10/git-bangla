class Hello {
  constructor(name) {
    this.name = name;
  }

  message() {
    console.log("Hurray!! Now we are able to contribute to open source.");
  }
}

let sayWelcome = new Hello("Hasu");
sayWelcome.greeting();

//added in branchB

let sqrt = function(x) {
  return x * x;
};
