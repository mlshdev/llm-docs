> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/index(before:)-2jmfj](https://developer.apple.com/documentation/swift/bidirectionalcollection/index(before:)-2jmfj)

# index(before:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the position immediately after the given index.

## Declaration

```swift
func index(before i: Self.Index) -> Self.Index
```

## Parameters

- `i`: A valid index of the collection. `i` must be greater than `startIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately before `i`.
