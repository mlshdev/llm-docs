> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/indices-9kkbf](https://developer.apple.com/documentation/swift/collection/indices-9kkbf)

# indices

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The indices that are valid for subscripting the collection, in ascending order.

## Declaration

```swift
var indices: Self.Indices { get }
```

<a id="discussion"></a>

## Discussion

A collection’s `indices` property can hold a strong reference to the collection itself, causing the collection to be nonuniquely referenced. If you mutate the collection while iterating over its indices, a strong reference can result in an unexpected copy of the collection. To avoid the unexpected copy, use the `index(after:)` method starting with `startIndex` to produce indices instead.

```swift
var c = MyFancyCollection([10, 20, 30, 40, 50])
var i = c.startIndex
while i != c.endIndex {
    c[i] /= 5
    i = c.index(after: i)
}
// c == MyFancyCollection([2, 4, 6, 8, 10])
```

## Default Implementations

### BidirectionalCollection Implementations

- [indices](../bidirectionalcollection/indices-4jyvu.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. The indices that are valid for subscripting the collection, in ascending order.

### Collection Implementations

- [indices](indices-wkbb.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.

## See Also

### Manipulating Indices

- [startIndex](startindex.md): The position of the first element in a nonempty collection.
- [endIndex](endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29-393pr.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29-6jwra.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
