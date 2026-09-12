> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/arrayslice/bidirectionalcollection-implementations](https://developer.apple.com/documentation/swift/arrayslice/bidirectionalcollection-implementations)

# BidirectionalCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [last](last.md): The last element of the collection.

### Instance Methods

- [difference(from:)](difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.
- [dropLast(\_:)](droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [joined(separator:)](joined%28separator_%29-9k2fw.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [popLast()](poplast%28%29-3t0h0.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast()](removelast%28%29-2ndpz.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast(\_:)](removelast%28__%29-8vsvg.md): Conforms when `Self` is `Self.SubSequence`. Removes the given number of elements from the end of the collection.
- [reversed()](reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [suffix(\_:)](suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
