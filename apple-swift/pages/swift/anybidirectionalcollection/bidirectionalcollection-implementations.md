> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anybidirectionalcollection/bidirectionalcollection-implementations](https://developer.apple.com/documentation/swift/anybidirectionalcollection/bidirectionalcollection-implementations)

# BidirectionalCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [last](last.md): The last element of the collection.
- [startIndex](startindex.md): The position of the first element in a non-empty collection.

### Instance Methods

- [difference(from:)](difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.
- [distance(from:to:)](distance%28from_to_%29.md): Returns the distance between two indices.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the given index with its successor.
- [formIndex(before:)](formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
- [joined(separator:)](joined%28separator_%29-6ag5z.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [popLast()](poplast%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast()](removelast%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast(\_:)](removelast%28__%29.md): Conforms when `Self` is `Self.SubSequence`. Removes the given number of elements from the end of the collection.
- [reversed()](reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.

### Subscripts

- [subscript(\_:)](subscript%28__%29-95c1r.md): Accesses the element indicated by `position`.
- [subscript(\_:)](subscript%28__%29-9b37e.md): Accesses a contiguous subrange of the collection’s elements.
