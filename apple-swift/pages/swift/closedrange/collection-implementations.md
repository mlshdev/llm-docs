> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/closedrange/collection-implementations](https://developer.apple.com/documentation/swift/closedrange/collection-implementations)

# Collection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. The range’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [isEmpty](isempty.md): Conforms when `Bound` conforms to `Comparable`. A Boolean value indicating whether the range contains no elements.
- [startIndex](startindex.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. The position of the first element in the range.

### Instance Methods

- [distance(from:to:)](distance%28from_to_%29.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Returns the distance between two indices.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Returns an index that is the specified distance from the given index.
- [index(after:)](index%28after_%29.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Returns the position immediately after the given index.

### Subscripts

- [subscript(\_:)](subscript%28__%29-60m0l.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Accesses the element at specified position.
- [subscript(\_:)](subscript%28__%29-vph6.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Accesses a contiguous subrange of the collection’s elements.

### Type Aliases

- [ClosedRange.Indices](indices.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [ClosedRange.SubSequence](subsequence.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

### Enumerations

- [ClosedRange.Index](index.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. A type that represents a position in the collection.
