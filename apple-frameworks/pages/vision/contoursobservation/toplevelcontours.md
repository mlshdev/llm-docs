> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/toplevelcontours](https://developer.apple.com/documentation/vision/contoursobservation/toplevelcontours)

# topLevelContours

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An array of contours that don’t have another contour enclosing them.

## Declaration

```swift
var topLevelContours: [ContoursObservation.Contour] { get }
```

<a id="Discussion"></a>

## Discussion

This array constitutes the top of the contour hierarchy. You can iterate over each Contour instance to determine its children.

## See Also

### Inspecting an observation

- [contourCount](contourcount.md): The total number of detected contours.
- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
