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

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.nextNode;
        }

        return count;
    }
}

let list = new LinkedList();
list.append(3);
list.append(6);
list.prepend(1);
list.prepend(0);

console.log(list.size());

let list2 = new LinkedList();
list2.prepend(4);

console.log(list2.size());