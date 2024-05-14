// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        this.length++


        newNode.next = this.head;
        this.head = newNode
        return this


        // Write your hypothesis on the time complexity of this method here
        // time complexity of o(1) space complexity of o(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        this.length++
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;

        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;

        }
        return this

        // Write your hypothesis on the time complexity of this method here
        // time complextity: o(n) space complexity : o(1)
    }

    removeFromHead() {
        // Remove node at head

        let currHead = this.head
        if (!this.head) {
            return undefined

        } else {
            this.head = this.head.next
        }
        this.length--
        return currHead
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if(!this.head){
            return undefined
        }
        let curr = this.head;
        let prev = null
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        if(prev){
            prev.next = null
        }else{
            this.head = null
        }
        this.length--
        return curr

        // Write your hypothesis on the time complexity of this method here
        // time complexity : o(n)
    }

    peekAtHead() {
        // Return the value of head node
         if(this.head){
            return this.head.value
         }
         return undefined
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        let curr = this.head;
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
