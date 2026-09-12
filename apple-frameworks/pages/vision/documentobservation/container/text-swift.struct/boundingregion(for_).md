> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/text-swift.struct/boundingregion(for:)](https://developer.apple.com/documentation/vision/documentobservation/container/text-swift.struct/boundingregion(for:))

# boundingRegion(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Calculates a bounding region around the range of characters within a string.

## Declaration

```swift
func boundingRegion(for range: Range<String.Index>) -> NormalizedRegion?
```

## Parameters

- `range`: An interval for the amount of characters within the text string.
