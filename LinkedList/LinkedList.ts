import {ILinkedList} from './LL'
import {DataNode} from './Node'
export class DoublyLinkedList<T> implements ILinkedList<T> {
    private head: DataNode<T> | null  = null;

    constructor(...data: T[] | undefined) {
        if (data || data.length > 0) {
            this.createLinkedList(data);
        } 
    }

    private createLinkedList(data: T[]): DataNode<T> {
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
            while (curr.next !== null) 
                curr = curr.next;
            curr.next = node;
            return this.head;
        }
    } 
    
}

