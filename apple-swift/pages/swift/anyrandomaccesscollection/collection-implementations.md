> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyrandomaccesscollection/collection-implementations](https://developer.apple.com/documentation/swift/anyrandomaccesscollection/collection-implementations)

# Collection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [count](count.md): The number of elements.
- [first](first.md): The first element of the collection.
- [indices](indices-swift.property.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.
- [isEmpty](isempty.md): A Boolean value indicating whether the collection is empty.

### Instance Methods

- [firstIndex(of:)](firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [index(of:)](index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [indices(of:)](indices%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the indices of all the elements that are equal to the given element.
- [indices(where:)](indices%28where_%29.md): Returns the indices of all the elements that match the given predicate.
- [makeIterator()](makeiterator%28%29.md): Returns an iterator over the elements of this collection.
- [map(\_:)](map%28__%29-1emdw.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [popFirst()](popfirst%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
- [removeFirst()](removefirst%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29.md): Conforms when `Self` is `Self.SubSequence`. Removes the specified number of elements from the beginning of the collection.
- [removingSubranges(\_:)](removingsubranges%28__%29.md): Returns a collection of the elements in this collection that are not represented by the given range set.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29-2m0ih.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [suffix(from:)](suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Subscripts

- [subscript(\_:)](subscript%28__%29-1ezt3.md): Accesses a view of this collection with the elements at the given indices.
- [subscript(\_:)](subscript%28__%29-9umyp.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-ui2k.md)

### Type Aliases

- [AnyRandomAccessCollection.Index](index.md): A type that represents a position in the collection.
- [AnyRandomAccessCollection.Indices](indices.md): A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [AnyRandomAccessCollection.Iterator](iterator.md): A type that provides the collection’s iteration interface and encapsulates its iteration state.
- [AnyRandomAccessCollection.SubSequence](subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.
