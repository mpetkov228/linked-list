class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(HEAD = null) {
        this.HEAD = HEAD;
    }

    append(value) {
        if (!this.HEAD) {
            return this.HEAD = new Node(value);
        }

        let tl = this.tail();
        if (tl == null) {
            return this.HEAD.nextNode = new Node(value);
        }

        tl.nextNode = new Node(value);
    }

    prepend(value) {
        if (!this.HEAD) {
            return this.HEAD = new Node(value);
        }

        let node = new Node(value);
        node.nextNode = this.HEAD;
        this.HEAD = node;
    }

    size() {
        let count = 0;
        let node = this.HEAD;
        while (node) {
            count++;
            node = node.nextNode;
        }

        return count;
    }

    head() {
        return this.HEAD;
    }

    tail() {
        if (this.HEAD.nextNode == null) {
            return null;
        }

        let node = this.HEAD;
        while (node) {
            if (node.nextNode == null) {
                return node;
            }

            node = node.nextNode;
        }
    }

    at(index) {
        let length = this.size();
        if (length - 1 < index || index < 0) {
            return new Error('Index out of bounds!');
        }

        let count = 0;
        let node = this.HEAD;
        while (node) {
            if (count == index) {
                return node;
            }

            count++;
            node = node.nextNode;
        }
    }

    pop() {
        let node = this.HEAD;
        if (this.size() <= 1) {
            this.HEAD = null;
            return node;
        }

        let poppedNode = null;
        while (node) {
            if (node.nextNode.nextNode == null) {
                poppedNode = node.nextNode;
                node.nextNode = null;
                return poppedNode;
            }

            node = node.nextNode;
        }
    }

    contains(value) {
        if (this.size() == 0) {
            return false;
        }

        let node = this.HEAD;
        while (node) {
            if (node.value === value) {
                return true;
            }

            node = node.nextNode;
        }

        return false;
    }
}

let list = new LinkedList();
list.append(3);
list.append(6);
list.prepend(1);
list.prepend(0);
list.append(7);

console.log(list.contains());
console.log(list.contains(7));