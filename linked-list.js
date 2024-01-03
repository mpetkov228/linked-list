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
}

let list = new LinkedList();
list.append(3);
list.append(6);
list.prepend(1);
list.prepend(0);
list.append(7);

console.log(list.tail());