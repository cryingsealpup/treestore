interface Node {
    id: number;
    parent: number | string;
    [x: string | number | symbol]: unknown;
}

export default class TreeStore {
    private index: { [key: string]: Node };
    private tree: { [key: string]: Node[] };
    private nodeList: Node[];

    constructor(array: Node[]) {
        const { index, tree, array: nodeList } = this.buildTree(array);
        this.index = index;
        this.tree = tree;
        this.nodeList = nodeList;
    }

    private buildTree(array: Node[]) {
        return array.reduce(
            (acc, node) => {
                acc.index[node.id] = node;

                if (acc.tree[node.parent]) {
                    acc.tree[node.parent].push(node);
                } else {
                    acc.tree[node.parent] = [node];
                }

                acc.array.push(node);

                return acc;
            },
            {
                index: {},
                tree: {},
                array: [],
            }
        );
    }

    public getAll() {
        return this.nodeList;
    }

    public getItem(id: number | string) {
        return this.index[id.toString()];
    }

    public getChildren(id: number) {
        return this.tree[id.toString()] || [];
    }

    public getAllChildren(id: number) {
        const node = this.getChildren(id);
        return node.reduce(
            (acc, prev) =>
                this.getChildren(prev.id)
                    ? acc.concat(this.getAllChildren(prev.id))
                    : prev,
            node
        );
    }

    public getAllParents(id: number | string) {
        const result: Node[] = [];
        let node = this.getItem(id);
        while (node) {
            node = this.getItem(node.parent);
            node ? result.push(node) : "";
        }
        return result;
    }
}

export { Node as Item };
