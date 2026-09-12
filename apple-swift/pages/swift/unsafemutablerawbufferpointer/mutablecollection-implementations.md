> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawbufferpointer/mutablecollection-implementations](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer/mutablecollection-implementations)

# MutableCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Methods

- [moveSubranges(\_:to:)](movesubranges%28__to_%29.md): Moves the elements in the given subranges to just before the element at the specified index.
- [partition(by:)](partition%28by_%29-33su4.md): Conforms when `Self` conforms to `BidirectionalCollection`. Reorders the elements of the collection such that all the elements that match the given predicate are after all the elements that don’t match.
- [partition(by:)](partition%28by_%29-90pny.md): Reorders the elements of the collection such that all the elements that match the given predicate are after all the elements that don’t match.
- [reverse()](reverse%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Reverses the elements of the collection in place.
- [shuffle()](shuffle%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place.
- [shuffle(using:)](shuffle%28using_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place, using the given generator as a source for randomness.
- [sort()](sort%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection` and `Element` conforms to `Comparable`. Sorts the collection in place.
- [sort(by:)](sort%28by_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Sorts the collection in place, using the given predicate as the comparison between elements.
- [swapAt(\_:\_:)](swapat%28____%29.md): Exchanges the byte values at the specified indices in this buffer’s memory.
- [withContiguousMutableStorageIfAvailable(\_:)](withcontiguousmutablestorageifavailable%28__%29.md): Executes a closure on the collection’s contiguous storage.

### Subscripts

- [subscript(\_:)](subscript%28__%29-3g42.md): Conforms when `SubSequence` is `Slice<Self>`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-3i1y.md): Deprecated. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-3kwnc.md)
- [subscript(\_:)](subscript%28__%29-3pmfu.md)
- [subscript(\_:)](subscript%28__%29-9v9lo.md): Deprecated.
- [subscript(\_:)](subscript%28__%29-u791.md): Accesses the byte at the given offset in the memory region as a `UInt8` value.
- [subscript(\_:)](subscript%28__%29-znv7.md): Accesses the bytes in the specified memory region.
