> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazymapsequence/collection-implementations](https://developer.apple.com/documentation/swift/lazymapsequence/collection-implementations)

# Collection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [count](count.md): Conforms when `Base` conforms to `Collection`. The number of elements in the collection.
- [count](count-5qqod.md): The number of elements in the collection.
- [endIndex](endindex.md): Conforms when `Base` conforms to `Collection`. The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](indices-swift.property.md): Conforms when `Base` conforms to `Collection`. The indices that are valid for subscripting the collection, in ascending order.
- [isEmpty](isempty.md): Conforms when `Base` conforms to `Collection`. A Boolean value indicating whether the collection is empty.
- [isEmpty](isempty-75pes.md): A Boolean value indicating whether the collection is empty.
- [startIndex](startindex.md): Conforms when `Base` conforms to `Collection`. The position of the first element in a nonempty collection.

### Instance Methods

- [distance(from:to:)](distance%28from_to_%29.md): Conforms when `Base` conforms to `Collection`. Returns the distance between two indices.
- [distance(from:to:)](distance%28from_to_%29-3i820.md): Returns the distance between two indices.
- [firstIndex(of:)](firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [formIndex(after:)](formindex%28after_%29.md): Conforms when `Base` conforms to `Collection`. Replaces the given index with its successor.
- [formIndex(after:)](formindex%28after_%29-6932e.md): Replaces the given index with its successor.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Conforms when `Base` conforms to `Collection`. Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:)](index%28__offsetby_%29-78pdz.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Conforms when `Base` conforms to `Collection`. Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29-5uiel.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](index%28after_%29.md): Conforms when `Base` conforms to `Collection`. Returns the position immediately after the given index.
- [index(of:)](index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [indices(of:)](indices%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the indices of all the elements that are equal to the given element.
- [indices(where:)](indices%28where_%29.md): Returns the indices of all the elements that match the given predicate.
- [map(\_:)](map%28__%29-8qb3x.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
- [removingSubranges(\_:)](removingsubranges%28__%29.md): Returns a collection of the elements in this collection that are not represented by the given range set.
- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29-5eafc.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [suffix(from:)](suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Subscripts

- [subscript(\_:)](subscript%28__%29-36b2w.md): Conforms when `Base` conforms to `Collection`. Accesses the element at `position`.
- [subscript(\_:)](subscript%28__%29-3hxz5.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-4qmx0.md): Conforms when `Base` conforms to `Collection`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-4tv8v.md): Accesses a view of this collection with the elements at the given indices.
- [subscript(\_:)](subscript%28__%29-88114.md)

### Type Aliases

- [LazyMapSequence.Index](index.md): Conforms when `Base` conforms to `Collection`. A type that represents a position in the collection.
- [LazyMapSequence.Indices](indices-swift.typealias.md): Conforms when `Base` conforms to `Collection`. A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [LazyMapSequence.SubSequence](subsequence.md): Conforms when `Base` conforms to `Collection`. A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.
