> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/randomaccesscollection/index(after:)](https://developer.apple.com/documentation/swift/randomaccesscollection/index(after:))

# index(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the position immediately after the given index.

## Declaration

```swift
override func index(after i: Self.Index) -> Self.Index
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
