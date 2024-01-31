import TreeStore from "./src/TreeStore";
import { Item } from "./src/TreeStore";


const items: Item[] = [
    {
        id: 2,
        parent: 1,
        type: 'test'
    },
    {
        id: 4,
        parent: 2,
        type: 'test'
    },
    {
        id: 1,
        parent: 'root'
    },
    {
        id: 3,
        parent: 1,
        type: 'test'
    },


    {
        id: 5,
        parent: 2,
        type: 'test'
    },
    {
        id: 6,
        parent: 2,
        type: 'test'
    },

    {
        id: 7,
        parent: 4,
        type: null
    },
    {
        id: 8,
        parent: 4,
        type: null
    },
];

const ts = new TreeStore(items);


console.log('GET ALL', ts.getAll(), '\n')
console.log('GET ITEM 7', ts.getItem(7), '\n')
console.log('GET CHILDREN 4', ts.getChildren(4), '\n')
console.log('GET CHILDREN 5',ts.getChildren(5), '\n')
console.log('GET CHILDREN 2',ts.getChildren(2), '\n')
console.log('GET ALL CHILDREN 2',ts.getAllChildren(2), '\n')
console.log('GET ALL PARENTS 7',ts.getAllParents(7), '\n')