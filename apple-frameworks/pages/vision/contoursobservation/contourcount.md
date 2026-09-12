> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/contourcount](https://developer.apple.com/documentation/vision/contoursobservation/contourcount)

# contourCount

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The total number of detected contours.

## Declaration

```swift
var contourCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the number of indices available for calling [contourAtIndex(\_:)](contouratindex%28__%29.md).

## See Also

### Inspecting an observation

- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
