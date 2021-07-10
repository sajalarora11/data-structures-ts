import { ILinkedList } from "./LL";
import { DataNode } from "./Node";

/**
 * TODOS
 * Test the implementation of code
 * Improve the generics
 * Make code more reusable by adding traverse method
 *  Fix the generics comparsion
 */

export class DoublyLinkedList<T> implements ILinkedList<T> {
  private head: DataNode<T> | null = null;

  constructor(...data: T[] | undefined) {
    if (data || data.length > 0) {
      this.createLinkedList(data);
    }
  }

  public createLinkedList(data: T[]): DataNode<T> {
    for (const d of data) {
      this.pushNode(d);
    }
    return this.head;
  }

  public pushNode(data: T): DataNode<T> {
    const node = new DataNode(data);

    if (!this.head) {
      this.head = node;
    } else {
      let curr: DataNode<T> = this.head;
      while (curr.next !== null) curr = curr.next;
      curr.next = node;
      node.prev = curr;
      return this.head;
    }
  }

  public insertNodeInFront(data: T): DataNode<T> {
    const node: DataNode<T> = new DataNode(data);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  public deleteNodeInFront(): DataNode<T> {
    const firstNode = this.head.next;
    firstNode.prev = null;
    this.head = firstNode;
    return this.head;
  }

  public pullNode(): DataNode<T> {
    let curr: DataNode<T> = this.head.next;

    while (curr.next !== null) curr = curr.next;
    const prev = curr.prev;
    prev.next = null;
    curr = null;
    return this.head;
  }

  public insertAtPosition(position: number, data: T): DataNode<T> {
    if (position === 0) {
      this.insertNodeInFront(data);
      return;
    }
    let i = 0;
    let curr = this.head.next;
    let prev = this.head;
    const node = new DataNode(data);
    while (i < Number(position) - 1) {
      prev = curr;
      curr = curr?.next;
      i++;
    }
    const temp = curr;
    prev.next = node;
    node.prev = prev;
    node.next = temp;
    return this.head;
  }

  public deleteAtPosition(position: number): DataNode<T> {
    if (Number(position) === 0) {
      this.deleteNodeInFront();
      return;
    }
    let i = 0;
    let curr = this.head.next;
    let prev = this.head;
    while (i < Number(position) - 1) {
      prev = curr;
      curr = curr?.next;
      i++;
    }
    if (!curr.next) {
      prev.next = curr.next;
      return this.head;
    }
    const temp = curr.next;
    temp.prev = prev;
    prev.next = temp;
    curr = null;
    return this.head;
  }

  public printList(): void {
    let currentNode = this.head;

    while (currentNode?.next !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(currentNode.data);
  }

  public size(): number {
    let currentNode = this.head;
    let count = 0;
    while (currentNode?.next !== null) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
}

const list = new DoublyLinkedList(1, 2, 3, 4);
list.pushNode(5);
list.pushNode(6);
list.pullNode();
list.insertAtPosition(5, 6);
list.deleteAtPosition(5);
list.printList();
