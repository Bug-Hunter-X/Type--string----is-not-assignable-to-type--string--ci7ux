function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, "+ person + "!";
  } else {
    return "Hello, "+ person.join(' ') + "!";
  }
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); // This will now compile and produce correct output

let user2 = "John";
console.log(greeter(user2)); // This will also compile and produce correct output