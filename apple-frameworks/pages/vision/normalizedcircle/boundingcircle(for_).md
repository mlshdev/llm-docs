> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedcircle/boundingcircle(for:)](https://developer.apple.com/documentation/vision/normalizedcircle/boundingcircle(for:))

# boundingCircle(for:)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates the smallest circle that encloses the points you specify.

## Declaration

```swift
static func boundingCircle(for points: [NormalizedPoint]) -> NormalizedCircle
```

## Parameters

- `points`: The list of points.
