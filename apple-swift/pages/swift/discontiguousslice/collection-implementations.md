> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice/collection-implementations](https://developer.apple.com/documentation/swift/discontiguousslice/collection-implementations)

# Collection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Structures

- [DiscontiguousSlice.Index](index.md): Conforms when `Base` conforms to `Collection`. A position in a `DiscontiguousSlice`.

### Instance Properties

- [count](count.md): Conforms when `Base` conforms to `Collection`. The number of elements in the collection.
- [count](count-37f7u.md): The number of elements in the collection.
- [endIndex](endindex.md): Conforms when `Base` conforms to `Collection`. The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [first](first.md): The first element of the collection.
- [indices](indices-swift.property.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.
- [isEmpty](isempty.md): Conforms when `Base` conforms to `Collection`. A Boolean value indicating whether the collection is empty.
- [isEmpty](isempty-6y6jl.md): A Boolean value indicating whether the collection is empty.
- [startIndex](startindex.md): Conforms when `Base` conforms to `Collection`. The position of the first element in a nonempty collection.
- [underestimatedCount](underestimatedcount.md): A value less than or equal to the number of elements in the collection.

### Instance Methods

- [distance(from:to:)](distance%28from_to_%29.md): Conforms when `Base` conforms to `Collection`. Returns the distance between two indices.
- [distance(from:to:)](distance%28from_to_%29-7p9uz.md): Returns the distance between two indices.
- [drop(while:)](drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [firstIndex(of:)](firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the given index with its successor.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](index%28after_%29.md): Conforms when `Base` conforms to `Collection`. Returns the position immediately after the given index.
- [index(of:)](index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [indices(of:)](indices%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the indices of all the elements that are equal to the given element.
- [indices(where:)](indices%28where_%29.md): Returns the indices of all the elements that match the given predicate.
- [makeIterator()](makeiterator%28%29.md): Conforms when `Iterator` is `IndexingIterator<Self>`. Returns an iterator over the elements of the collection.
- [map(\_:)](map%28__%29-44xuh.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [popFirst()](popfirst%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [prefix(\_:)](prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
- [removeFirst()](removefirst%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29.md): Conforms when `Self` is `Self.SubSequence`. Removes the specified number of elements from the beginning of the collection.
- [removingSubranges(\_:)](removingsubranges%28__%29.md): Returns a collection of the elements in this collection that are not represented by the given range set.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29-5ji1p.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [suffix(\_:)](suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Subscripts

- [subscript(\_:)](subscript%28__%29-1ra8t.md): Conforms when `Base` conforms to `Collection`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-1ytel.md)
- [subscript(\_:)](subscript%28__%29-8h9i0.md): Conforms when `Base` conforms to `Collection`. Accesses the element at the specified position.

### Type Aliases

- [DiscontiguousSlice.Indices](indices.md): Conforms when `Base` conforms to `Collection`. A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [DiscontiguousSlice.SubSequence](subsequence.md): Conforms when `Base` conforms to `Collection`. A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.
