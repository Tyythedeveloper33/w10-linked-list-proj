// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val)
        this.length++
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        let currHead = this.head
        if (!this.head) {
            return
        }
        this.head = this.head.next

        if (this.head) {
            this.head.prev = null
        }


        this.length--
        return currHead.value






        // Your code here

        // Write your hypothesis on the time complexity of this method here
        // time complexity o(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) {
            return
        }

        let currTail = this.tail
        this.tail = this.tail.prev

        if (this.tail) {
            this.tail.next = null
        }



        this.length--
        return currTail.value

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        if (!this.head) {
            return undefined
        } else {
            return this.head.value
        }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.head) {
            return undefined
        } else {
            return this.tail.value
        }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
