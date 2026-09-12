> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/normalizedpath](https://developer.apple.com/documentation/vision/contoursobservation/normalizedpath)

# normalizedPath

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The detected contours as a path object in normalized coordinates.

## Declaration

```swift
var normalizedPath: CGPath { get }
```

## See Also

### Inspecting an observation

- [contourCount](contourcount.md): The total number of detected contours.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
