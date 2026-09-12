> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/randomaccesscollection/distance(from:to:)](https://developer.apple.com/documentation/swift/randomaccesscollection/distance(from:to:))

# distance(from:to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance between two indices.

## Declaration

```swift
func distance(from start: Self.Index, to end: Self.Index) -> Int
```

## Parameters

- `start`: A valid index of the collection.
- `end`: Another valid index of the collection. If `end` is equal to `start`, the result is zero.

<a id="return-value"></a>

## Return Value

The distance between `start` and `end`. The result can be negative only if the collection conforms to the `BidirectionalCollection` protocol.

<a id="discussion"></a>

## Discussion

Unless the collection conforms to the `BidirectionalCollection` protocol, `start` must be less than or equal to `end`.

> **Complexity**

> O(1)

## Default Implementations

### BidirectionalCollection Implementations

- [distance(from:to:)](../bidirectionalcollection/distance%28from_to_%29-6p3we.md): Conforms when `Index` conforms to `Strideable`, `Indices` is `Range<Self.Index>`, and `Index.Stride` is `Int`. Returns the distance between two indices.
