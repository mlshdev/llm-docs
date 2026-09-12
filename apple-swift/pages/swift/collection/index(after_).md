> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/index(after:)](https://developer.apple.com/documentation/swift/collection/index(after:))

# index(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the position immediately after the given index.

## Declaration

```swift
func index(after i: Self.Index) -> Self.Index
```

## Parameters

- `i`: A valid index of the collection. `i` must be less than `endIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately after `i`.

<a id="discussion"></a>

## Discussion

The successor of an index must be well defined. For an index `i` into a collection `c`, calling `c.index(after: i)` returns the same index every time.

## Default Implementations

### BidirectionalCollection Implementations

- [index(after:)](../bidirectionalcollection/index%28after_%29-4zlq6.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. Returns the position immediately after the given index.

## See Also

### Manipulating Indices

- [startIndex](startindex.md): The position of the first element in a nonempty collection.
- [endIndex](endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](indices-9kkbf.md): The indices that are valid for subscripting the collection, in ascending order.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29-393pr.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29-6jwra.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
