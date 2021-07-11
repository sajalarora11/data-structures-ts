import { ILinkedList } from "./LL";
import { DataNode } from "./Node";

class SinglyLinkedList<T> implements ILinkedList<T> {
  private head: DataNode<T> | null;
  constructor(...data: T[]) {
    this.head = null;
    if (data || data.length > 0) {
      this.createLinkedList(data);
    }
  }

  public createLinkedList(data: T[]): DataNode<T> {
    for (let i = 0; i < data.length; ++i) {
      const elem = data[i];

      this.pushNode(elem);
    }
    return this.head;
  }

  public pushNode(data: T): DataNode<T> {
    const dataNode = new DataNode(data);
    if (!this.head) {
      this.head = dataNode;
    } else {
      let currentNode = this.head;

      while (currentNode?.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = dataNode;
    }
    return this.head;
  }

  public printList() {
    let currentNode = this.head;

    while (currentNode?.next !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(currentNode.data);
  }

  public findDataAtPosition(position?: number) {
    let curr = 0;

    let currentNode: DataNode<T> = this.head;
    while (curr < position) {
      currentNode = currentNode.next;
      curr++;
    }
    console.log(currentNode.data);
  }

  public pullNode(): DataNode<T> {
    let currentNode = this.head.next;
    let previousNode = this.head;

    while (currentNode?.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;

    return this.head;
  }

  public deleteAtFront(): DataNode<T> {
    const curr = this.head.next;
    this.head = curr;
    return this.head;
  }

  public deleteAtPosition(position: number): DataNode<T> {
    if (position === 0) {
      this.deleteAtFront();
      return;
    }
    let prev = this.head;
    let curr = this.head.next;
    let i = 0;

    while (i < position - 1) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = curr.next;
    curr = null;
    return this.head;
  }

  public insertNodeInFront(data: T): DataNode<T> {
    const node = new DataNode(data);
    const curr = this.head;
    node.next = curr;
    this.head = node;
    return this.head;
  }

  public insertAtPosition(position: number, data: T): DataNode<T> {
    if (position === 0) {
      this.insertNodeInFront(data);
      return;
    }
    let curr = this.head;
    let i = 0;
    while (i < position) {
      curr = curr.next;
      i++;
    }
    const newNode = new DataNode(data);
    const temp = curr.next;
    curr.next = newNode;
    newNode.next = temp;
    return this.head;
  }

  public size(): number {
    let count = 0;
    while (this.head !== null) {
      this.head = this.head.next;
      count++;
    }
    return count;
  }
}

const list = new SinglyLinkedList(1, 2, 3, 4, 5);
list.printList();
