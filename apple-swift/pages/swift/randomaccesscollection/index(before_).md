> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/randomaccesscollection/index(before:)](https://developer.apple.com/documentation/swift/randomaccesscollection/index(before:))

# index(before:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the position immediately before the given index.

## Declaration

```swift
override func index(before i: Self.Index) -> Self.Index
```

## Parameters

- `i`: A valid index of the collection. `i` must be greater than `startIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately before `i`.

## Default Implementations

### BidirectionalCollection Implementations

- [index(before:)](../bidirectionalcollection/index%28before_%29-2jmfj.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. Returns the position immediately after the given index.
