> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazymapsequence/bidirectionalcollection-implementations](https://developer.apple.com/documentation/swift/lazymapsequence/bidirectionalcollection-implementations)

# BidirectionalCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [last](last.md): The last element of the collection.

### Instance Methods

- [difference(from:)](difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.
- [distance(from:to:)](distance%28from_to_%29-3cd1e.md)
- [formIndex(before:)](formindex%28before_%29.md): Conforms when `Base` conforms to `BidirectionalCollection`. Replaces the given index with its predecessor.
- [formIndex(before:)](formindex%28before_%29-8rmvx.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](index%28__offsetby_%29-ldgv.md)
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29-niw7.md)
- [index(before:)](index%28before_%29.md): Conforms when `Base` conforms to `BidirectionalCollection`. A value less than or equal to the number of elements in the collection.
- [joined(separator:)](joined%28separator_%29-4i6uz.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
