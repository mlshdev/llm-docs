> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectiondifference/index(after:)](https://developer.apple.com/documentation/swift/collectiondifference/index(after:))

# index(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the position immediately after the given index.

## Declaration

```swift
func index(after index: CollectionDifference<ChangeElement>.Index) -> CollectionDifference<ChangeElement>.Index
```

<a id="return-value"></a>

## Return Value

The index value immediately after `i`.

<a id="discussion"></a>

## Discussion

The successor of an index must be well defined. For an index `i` into a collection `c`, calling `c.index(after: i)` returns the same index every time.
