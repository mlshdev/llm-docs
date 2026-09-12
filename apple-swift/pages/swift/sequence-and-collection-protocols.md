> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence-and-collection-protocols](https://developer.apple.com/documentation/swift/sequence-and-collection-protocols)

# Sequence and Collection Protocols

**Framework:** Swift  
**Kind:** API Collection

Write generic code that works with any collection, or build your own collection types.

## Topics

### First Steps

- [Sequence](sequence.md): A type that provides sequential, iterated access to its elements.
- [Collection](collection.md): A sequence whose elements can be traversed multiple times, nondestructively, and accessed by an indexed subscript.

### Collection Traversal

- [BidirectionalCollection](bidirectionalcollection.md): A collection that supports backward as well as forward traversal.
- [RandomAccessCollection](randomaccesscollection.md): A collection that supports efficient random-access index traversal.

### Collection Mutability

- [MutableCollection](mutablecollection.md): A collection that supports subscript assignment.
- [RangeReplaceableCollection](rangereplaceablecollection.md): A collection that supports replacement of an arbitrary subrange of elements with the elements of another collection.

### Manual Iteration

- [IteratorProtocol](iteratorprotocol.md): A type that supplies the values of a sequence one at a time.
- [BorrowingIteratorProtocol](borrowingiteratorprotocol.md): A type that provides borrowed access to the values of a borrowing sequence.
- [BorrowingIteratorAdapter](borrowingiteratoradapter.md)

### Algebraic Sets

- [SetAlgebra](setalgebra.md): A type that provides mathematical set operations.

### Lazy Collections

- [LazySequenceProtocol](lazysequenceprotocol.md): A sequence on which normally-eager sequence operations are implemented lazily.
- [LazyCollectionProtocol](lazycollectionprotocol.md)

## See Also

### Advanced Collection Topics

- [Supporting Types](supporting-types.md): Use wrappers, indices, and iterators in operations like slicing, flattening, and reversing a collection.
- [Managed Buffers](managed-buffers.md): Build your own buffer-backed collection types.
