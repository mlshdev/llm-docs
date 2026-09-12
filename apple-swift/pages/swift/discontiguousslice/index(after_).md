> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice/index(after:)](https://developer.apple.com/documentation/swift/discontiguousslice/index(after:))

# index(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the position immediately after the given index.

## Declaration

```swift
func index(after i: DiscontiguousSlice<Base>.Index) -> DiscontiguousSlice<Base>.Index
```

## Parameters

- `i`: A valid index of the collection. `i` must be less than `endIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately after `i`.

<a id="discussion"></a>

## Discussion

The successor of an index must be well defined. For an index `i` into a collection `c`, calling `c.index(after: i)` returns the same index every time.
