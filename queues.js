//Queue uses FIFO

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    peek(){
        //Shows first node in queue
        if(!this.first){
            return null
        }
        return this.first
    }
    enqueue(data){
        //if no first, add a new first. otherwise, go to back of line
        const node = new Node (data)

        if(!this.first){
            this.first = node
            this.last = node
        }else{
            this.last.next = node
            this.last = node
        }
        this.length++
        return this
    }
    dequeue(){
        const trackingNode = this.first
        //first come, first served
        if(this.first === this.last){
            this.first = null
            this.last = null
            this.length--
            return trackingNode
        }else {
            this.first = this.first.next
            this.length--   
        }
        return trackingNode

    }
}

const q = new Queue()
q.enqueue('First in line')
q.enqueue('2nd in line')
q.enqueue('3rd in line')
console.log(q)
