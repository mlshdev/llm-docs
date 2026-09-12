> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectionofone/randomaccesscollection-implementations](https://developer.apple.com/documentation/swift/collectionofone/randomaccesscollection-implementations)

# RandomAccessCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): The “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](indices-swift.property.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. The indices that are valid for subscripting the collection, in ascending order.
- [startIndex](startindex.md): The position of the first element.

### Instance Methods

- [distance(from:to:)](distance%28from_to_%29.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. Returns the distance between two indices.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.

### Subscripts

- [subscript(\_:)](subscript%28__%29-16mfr.md): Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-876qi.md): Accesses the element at the specified position.
