> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/bidirectionalcollection-implementations](https://developer.apple.com/documentation/swift/slice/bidirectionalcollection-implementations)

# BidirectionalCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [last](last.md): The last element of the collection.

### Instance Methods

- [difference(from:)](difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.
- [formIndex(before:)](formindex%28before_%29.md): Conforms when `Base` conforms to `BidirectionalCollection`. Replaces the given index with its predecessor.
- [formIndex(before:)](formindex%28before_%29-d9pr.md): Replaces the given index with its predecessor.
- [index(before:)](index%28before_%29.md): Conforms when `Base` conforms to `BidirectionalCollection`. Returns the position immediately before the given index.
- [joined(separator:)](joined%28separator_%29-6sxlg.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [popLast()](poplast%28%29-7zlp7.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast()](removelast%28%29-29ty4.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast(\_:)](removelast%28__%29-4ijd6.md): Conforms when `Self` is `Self.SubSequence`. Removes the given number of elements from the end of the collection.
