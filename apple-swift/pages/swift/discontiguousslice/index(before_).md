> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice/index(before:)](https://developer.apple.com/documentation/swift/discontiguousslice/index(before:))

# index(before:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the position immediately before the given index.

## Declaration

```swift
func index(before i: DiscontiguousSlice<Base>.Index) -> DiscontiguousSlice<Base>.Index
```

## Parameters

- `i`: A valid index of the collection. `i` must be greater than `startIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately before `i`.
