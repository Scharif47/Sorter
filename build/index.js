"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection("Hello There");
var numberSorter = new Sorter_1.Sorter(numbersCollection);
var charSorter = new Sorter_1.Sorter(charactersCollection);
numberSorter.sort();
charSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
