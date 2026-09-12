> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf16view/bidirectionalcollection-implementations](https://developer.apple.com/documentation/swift/string/utf16view/bidirectionalcollection-implementations)

# BidirectionalCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): The “past the end” position—that is, the position one greater than the last valid subscript argument.
- [last](last.md): The last element of the collection.
- [startIndex](startindex.md): The position of the first code unit if the `String` is nonempty; identical to `endIndex` otherwise.

### Instance Methods

- [difference(from:)](difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.
- [distance(from:to:)](distance%28from_to_%29.md): Returns the distance between two indices.
- [dropLast(\_:)](droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [formIndex(before:)](formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [reversed()](reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [suffix(\_:)](suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.

### Subscripts

- [subscript(\_:)](subscript%28__%29-5fneh.md): Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-5ta1h.md): Accesses the code unit at the given position.
