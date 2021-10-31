import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";


const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection("Hello There")
const numberSorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);
numberSorter.sort();
charSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
