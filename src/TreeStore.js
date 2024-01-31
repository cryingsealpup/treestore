class Node {
    constructor(data) {
        this.id = data;
        this.parent = null;
    }
}


class TreeStore {
    constructor(array) {
        this.tree = this._buildTree(array);
    }

    _buildTree() {
        // TODO
    }

    root() {
        return this.tree.parent ? this.tree : null;
    }

    getAll() {
        return this.tree;
    }

    getItem(id) {
        // TODO
    }

    getChildren(id) {
        // TODO
    }

    getAllChildren(id) {
        // TODO
    }

    getAllParents(id) {
        // TODO
    }
}


export default TreeStore