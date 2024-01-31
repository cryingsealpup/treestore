class TreeStore {
    constructor(array) {
        const {
            index,
            tree,
            array: nodeList
        } = this.#buildTree(array);
        this.index = index; // To get access by index and not take any related nodes
        this.tree = tree; // To work with parent-children relationships
        this.nodeList = nodeList; // To store initial data
    }


    #buildTree(array) {
        return array.reduce((acc, node) => {
            acc.index[node.id] = node; // Add element to index array

            if (acc.tree[node.parent]) { // Since we're working with objects, nested objects will be updated too
                acc.tree[node.parent].push(node);
            } else {
                acc.tree[node.parent] = [node];
            }

            acc.array.push(node); // Add element with no changes to nodeList array

            return acc;
        }, {
            index: {},
            tree: {},
            array: []
        });
    }

    getAll() {
        return this.nodeList;
    }

    getItem(id) {
        return this.index[id];
    }

    getChildren(id) {
        return this.tree[id] || [];
    }

    getAllChildren(id) {
        const node = this.getChildren(id);
        return node.reduce((acc, prev) => 
        // Recursively reduce children array items until all nested nodes fetched
            this.getChildren(prev.id) ?
            acc.concat(this.getAllChildren(prev.id)) : prev, node);
    }

    getAllParents(id) {
        const result = [];
        let node = this.getItem(id);
        while (node) { // Walk from current element to root
            node = this.getItem(node.parent);
            node ? result.push(node) : '';
        }
        return result;
    }
}

export default TreeStore;