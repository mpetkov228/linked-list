class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (!this.head) {
            return this.head = new Node(value);
        }

        let node = this.head;
        while (node) {
            if (!node.nextNode) {
                node.nextNode = new Node(value);
                break;
            }

            node = node.nextNode;
        }
    }

    prepend(value) {
        if (!this.head) {
            return this.head = new Node(value);
        }

        let node = new Node(value);
        node.nextNode = this.head;
        this.head = node;
    }
}

let list = new LinkedList();
list.append(3);
list.append(6);
list.prepend(1);
list.prepend(0);

console.log(list);