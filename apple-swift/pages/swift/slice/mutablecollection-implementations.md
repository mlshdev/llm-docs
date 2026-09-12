> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/mutablecollection-implementations](https://developer.apple.com/documentation/swift/slice/mutablecollection-implementations)

# MutableCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Methods

- [moveSubranges(\_:to:)](movesubranges%28__to_%29.md): Moves the elements in the given subranges to just before the element at the specified index.
- [partition(by:)](partition%28by_%29-7efo8.md): Reorders the elements of the collection such that all the elements that match the given predicate are after all the elements that don’t match.
- [partition(by:)](partition%28by_%29-7n9yj.md): Conforms when `Self` conforms to `BidirectionalCollection`. Reorders the elements of the collection such that all the elements that match the given predicate are after all the elements that don’t match.
- [removeSubranges(\_:)](removesubranges%28__%29-20t3r.md): Conforms when `Self` conforms to `RangeReplaceableCollection`. Removes the elements at the given indices.
- [reverse()](reverse%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Reverses the elements of the collection in place.
- [shuffle()](shuffle%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place.
- [shuffle(using:)](shuffle%28using_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place, using the given generator as a source for randomness.
- [sort()](sort%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection` and `Element` conforms to `Comparable`. Sorts the collection in place.
- [sort(by:)](sort%28by_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Sorts the collection in place, using the given predicate as the comparison between elements.
- [swapAt(\_:\_:)](swapat%28____%29.md): Exchanges the values at the specified indices of the collection.
- [withContiguousMutableStorageIfAvailable(\_:)](withcontiguousmutablestorageifavailable%28__%29-2ual.md): Conforms when `Base` conforms to `MutableCollection`. Executes a closure on the collection’s contiguous storage.

### Subscripts

- [subscript(\_:)](subscript%28__%29-2elba.md): Deprecated.
- [subscript(\_:)](subscript%28__%29-3p9dc.md)
- [subscript(\_:)](subscript%28__%29-4f8ky.md)
- [subscript(\_:)](subscript%28__%29-87kqd.md): Conforms when `Base` conforms to `MutableCollection`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-8pq5s.md): Deprecated. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-uq47.md): Conforms when `SubSequence` is `Slice<Self>`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-z7ny.md): Conforms when `Base` conforms to `MutableCollection`. Accesses the element at the specified position.
