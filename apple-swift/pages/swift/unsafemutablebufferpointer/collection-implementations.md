> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/collection-implementations](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/collection-implementations)

# Collection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): The “past the end” position—that is, the position one greater than the last valid subscript argument.
- [first](first.md): The first element of the collection.
- [indices](indices-swift.property.md): The indices that are valid for subscripting the collection, in ascending order.
- [isEmpty](isempty.md): A Boolean value indicating whether the buffer is empty.
- [startIndex](startindex.md): The index of the first element in a nonempty buffer.
- [underestimatedCount](underestimatedcount-4ggr6.md): A value less than or equal to the number of elements in the collection.

### Instance Methods

- [distance(from:to:)](distance%28from_to_%29.md): Returns the distance between two indices.
- [drop(while:)](drop%28while_%29-37wq1.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](dropfirst%28__%29-1ruqu.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](droplast%28__%29-6rw2x.md): Returns a subsequence containing all but the specified number of final elements.
- [firstIndex(of:)](firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the given index with its successor.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [index(of:)](index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [indices(of:)](indices%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the indices of all the elements that are equal to the given element.
- [indices(where:)](indices%28where_%29.md): Returns the indices of all the elements that match the given predicate.
- [map(\_:)](map%28__%29-5p6og.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [prefix(\_:)](prefix%28__%29-1n69c.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](prefix%28while_%29-3arjm.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
- [removingSubranges(\_:)](removingsubranges%28__%29.md): Returns a collection of the elements in this collection that are not represented by the given range set.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29-4pbql.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29-3dgmc.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [suffix(\_:)](suffix%28__%29-qdce.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Subscripts

- [subscript(\_:)](subscript%28__%29-13u1d.md): Accesses a contiguous subrange of the buffer’s elements.
- [subscript(\_:)](subscript%28__%29-9t9gq.md): Accesses the element at the specified position.

### Type Aliases

- [UnsafeMutableBufferPointer.Index](index.md): A type that represents a position in the collection.
- [UnsafeMutableBufferPointer.Indices](indices-swift.typealias.md): A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [UnsafeMutableBufferPointer.SubSequence](subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.
