> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/emptycollection/randomaccesscollection-implementations](https://developer.apple.com/documentation/swift/emptycollection/randomaccesscollection-implementations)

# RandomAccessCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): Always zero, just like `startIndex`.
- [indices](indices-swift.property.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. The indices that are valid for subscripting the collection, in ascending order.
- [startIndex](startindex.md): Always zero, just like `endIndex`.

### Instance Methods

- [distance(from:to:)](distance%28from_to_%29.md): The distance between two indexes (always zero).
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](index%28after_%29.md): Always traps.
- [index(before:)](index%28before_%29.md): Always traps.

### Subscripts

- [subscript(\_:)](subscript%28__%29-1wkfh.md): Accesses the element at the given position.
- [subscript(\_:)](subscript%28__%29-5fxf8.md): Accesses a contiguous subrange of the collection’s elements.

### Type Aliases

- [EmptyCollection.Index](index.md): A type that represents a valid position in the collection.
