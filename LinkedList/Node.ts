export class DataNode<T> {
    public next: DataNode<T> | null = null;
    public prev: DataNode<T> | null = null;
    constructor(public data: T) {}
}