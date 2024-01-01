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
        if (this.head == null) {
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
}

let list = new LinkedList();
list.append(3);
list.append(6);
list.append(12);

console.log(list);