> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontoursobservation/normalizedpath](https://developer.apple.com/documentation/vision/vncontoursobservation/normalizedpath)

# normalizedPath (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The detected contours as a path object in normalized coordinates.

## Declaration

```swift
var normalizedPath: CGPath { get }
```

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contour(at:)](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contour(at:)](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.

# normalizedPath (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The detected contours as a path object in normalized coordinates.

## Declaration

```objectivec
@property (readonly) CGPathRef normalizedPath;
```

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contourAtIndex:error:](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contourAtIndexPath:error:](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.
