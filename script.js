// Stack
/*const stack = new stack();

stack.isEmpty(); //true

stack.push(5);
stack.push(12);
stack.push(30);

stack.peek(); // returns the topmost element of the stack
stack.pop(); // returns the topmost element of the stack and removes it at the same time
stack.size(); //gives us the current size of the stack

//Queue

const queue = new queue();

queue.isEmpty(); //true
queue.enqueue(5); //adds 5 into the queue
queue.enqueue(12); //adds 12 into the queue
queue.enqueue(15); //adds 15 into the queue

queue.peek(); //gives us the item that is in front of the queue
queue.dequeue(); //12
queue.size(); */

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
  peek() {
    return this.items[0];
  }
}
const queue = new Queue();
queue.enqueue(5); //queue state: [5]
queue.enqueue(10); //queue state [5,10]
queue.enqueue(13); // queue state [5,10,13]
queue.peek();

console.log(queue.peek()); //Output 5,
console.log(queue.dequeue()); // Output 5 queue state [10, 13];
console.log(queue.peek()); //output 10
console.log(queue.size()); //Output 2
