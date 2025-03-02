const { Node } = require("./node");

class LinkedList {
  head;

  constructor() {
    this.head = new Node();
  }

  append(value) {
    const valueNode = new Node(value);
    if (!this.head.value) this.head = valueNode;
    else {
      let temp = this.head;
      while (temp.nextNode) temp = temp.nextNode;
      temp.nextNode = valueNode;
    }
  }

  prepand(value) {
    const valueNode = new Node(value);
    if (!this.head.value) this.head = valueNode;
    else {
      valueNode.nextNode = this.head;
      this.head = valueNode;
    }
  }

  toString() {
    let temp = this.head;
    let resultString = "";
    while (temp) {
      resultString += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    resultString += null;
    return resultString;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepand("monkey");
list.prepand("panda");
console.log(list.toString());
