import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./linkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("Hello There");
const linkedList = new LinkedList();

linkedList.add(200);
linkedList.add(47);
linkedList.add(-12);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
