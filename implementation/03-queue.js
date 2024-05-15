const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode

        } else {
            let curr = this.tail
            while (!curr.next) {
                curr.next = newNode
                this.tail = newNode
            }

        }
        this.length++
        return this.length



        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        const currVal = this.head
        let res = []
        if (this.length === 1) {
            res.push(currVal)
            this.head = null
            this.tail = null
            return res[0].value
        }
        if (!this.head) {
            return null
        }


        this.head = this.head.next
       console.log(currVal.value)

        this.length--

        return currVal.value
        // Your code here

        // Write your hypothesis on the time complexity of this method here
        // time complexity of o(1) space complexity of o(n)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
