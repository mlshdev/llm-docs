> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/collection-implementations](https://developer.apple.com/documentation/swift/range/collection-implementations)

# Collection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](indices-swift.property.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. The indices that are valid for subscripting the range, in ascending order.
- [startIndex](startindex.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. The position of the first element in a nonempty collection.

### Instance Methods

- [distance(from:to:)](distance%28from_to_%29.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Returns the distance between two indices.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Returns an index that is the specified distance from the given index.
- [index(after:)](index%28after_%29.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Returns the position immediately after the given index.

### Subscripts

- [subscript(\_:)](subscript%28__%29-358vm.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Accesses the subsequence bounded by the given range.
- [subscript(\_:)](subscript%28__%29-84ykx.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Accesses the element at specified position.

### Type Aliases

- [Range.Index](index.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. A type that represents a position in the range.
- [Range.Indices](indices-swift.typealias.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [Range.SubSequence](subsequence.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.
