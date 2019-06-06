// 3 - union and intersection types

type StringOrNumber = string | number;

let stringOrNumber: StringOrNumber = 'foo';



























interface Person {
  name: string;
  age: number;
  occupation: string;
}

interface Pet {
  name: string;
  age: 'young' | 'old';
  kind: string;
}

let person: Person = {
  name: 'Max',
  age: 20,
  occupation: 'student',
};

let pet: Pet = {
  name: 'Tiger',
  age: 'old',
  kind: 'cat',
}

let personOrPet: Person | Pet = person;
personOrPet = pet as any;

let personOrPetName = personOrPet.name;
let personOrPetAge = personOrPet.age;
let personOccupation = personOrPet.occupation;
personOccupation = (personOrPet as Person).occupation;






















interface Named {
  name: string;
}

interface Aged {
  age: number;
}

let namedAndAged: Named & Aged = { name: 'Max', age: 20 };




















// Practical use: promise chains
const p1 = Promise.resolve().then(() => 1);
const p2 = Promise.resolve().then(() => Promise.resolve(1));
