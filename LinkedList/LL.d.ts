import { DataNode } from "./Node";

export interface ILinkedList<T> {
  createLinkedList(data: T[]): DataNode<T>;
  insertNodeInFront(data: T): DataNode<T>;
  pushNode(data: T): DataNode<T>;
  pullNode(data: T): DataNode<T>;
  insertAtPosition(position: number, data: T): DataNode<T>;
  deleteAtPosition(position: number): DataNode<T>;
  printList(): void;
  size(): number;
}
